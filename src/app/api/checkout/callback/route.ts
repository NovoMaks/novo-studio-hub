import { addUserPurchase } from '@/app/server/user';
import prisma from '@/lib/prisma';
import { PaymentCallbackData } from '@/types/yookassa';
import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await prisma.order.findFirst({
      where: {
        id: body.object.metadata.order_id,
      },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' });
    }

    const isSucceeded = body.object.status === 'succeeded';

    const newOrder = await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    if (isSucceeded) {
      newOrder.purchases?.map((purchase) => {
        addUserPurchase({
          email: newOrder.userEmail,
          purchase: { category: purchase.category, slug: purchase.slug },
        });
      });
    }

    // const items = JSON.parse(order?.items as string) as CartItemDTO[];

    // if (isSucceeded) {
    //   await sendEmail(
    //     order.email,
    //     'Next Pizza / Ваш заказ успешно оформлен 🎉',
    //     OrderSuccessTemplate({ orderId: order.id, items }),
    //   );
    // } else {
    //   // Письмо о неуспешной оплате
    // }
  } catch (error) {
    console.log('[Checkout Callback] Error:', error);
    return NextResponse.json({ error: 'Server error' });
  }
}
