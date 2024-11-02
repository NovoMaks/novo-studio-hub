import { orderInfo } from '@/app/server/order';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  if (!id) {
    return Response.error();
  }
  const data = await orderInfo({ id });

  return Response.json({ status: data?.status });
}
