// Next Imports
import { updateSubscription } from '@/app/server/subscription';
import { Subscription } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse<Subscription>> {
  const body: {
    email: Subscription['userEmail'];
    type: Subscription['type'];
    endDate: Subscription['endDate'];
    pricePlan: Subscription['pricePlan'];
  } = await req.json();
  return NextResponse.json(await updateSubscription(body));
}
