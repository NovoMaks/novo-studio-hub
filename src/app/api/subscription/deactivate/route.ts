// Next Imports
import { deactivateSubscription } from '@/app/server/subscription';
import { Subscription } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse<Subscription>> {
  const body: {
    email: Subscription['userEmail'];
  } = await req.json();
  return NextResponse.json(await deactivateSubscription(body));
}
