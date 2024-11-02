// Next Imports
import { createPayment } from '@/lib/payment';
import prisma from '@/lib/prisma';
import { Order, OrderStatus } from '@prisma/client';
import { redirect } from 'next/navigation';

export const newOrder = async (input: {
  userEmail: Order['userEmail'];
  totalAmount: Order['totalAmount'];
  category: string;
  slug: string;
  redirectTo: string;
}) => {
  let redirectUrl = '/';
  try {
    const order = await prisma.order.create({
      data: {
        userEmail: input.userEmail ?? '',
        totalAmount: input.totalAmount,
        status: OrderStatus.PENDING,
        purchases: [{ category: input.category, slug: input.slug }],
      },
    });

    const paymentData = await createPayment({
      amount: order.totalAmount,
      orderId: order.id,
      description: 'Оплата заказа #' + order.id,
      redirectTo: input.redirectTo,
    });

    if (!paymentData) {
      throw new Error('Payment data not found');
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    redirectUrl = paymentData.confirmation.confirmation_url;
    // await sendEmail(
    //   data.email,
    //   'Next Pizza / Оплатите заказ #' + order.id,
    //   PayOrderTemplate({
    //     orderId: order.id,
    //     totalAmount: order.totalAmount,
    //     paymentUrl,
    //   }),
    // );
    console.log('!!!', redirectUrl);
  } catch (err) {
    console.log('[CreateOrder] Server error', err);
    redirect(redirectUrl);
  } finally {
    redirect(redirectUrl);
  }
};

export const orderInfo = async (input: { id: Order['id'] }) => {
  const order = await prisma.order.findFirst({
    where: {
      id: input.id,
    },
  });
  return order;
};
