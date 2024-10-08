'use server';
import prisma from '@/lib/prisma';
import { Subscription } from '@prisma/client';

export const updateSubscription = async ({
  email,
  type,
  pricePlan,
  endDate,
}: {
  email: Subscription['userEmail'];
  type: Subscription['type'];
  endDate: Subscription['endDate'];
  pricePlan: Subscription['pricePlan'];
}) => {
  return prisma.subscription.update({
    data: { type, endDate, pricePlan, startDate: new Date(), isDeactivated: false },
    where: { userEmail: email },
  });
};

export const deactivateSubscription = async ({ email }: { email: Subscription['userEmail'] }) => {
  return prisma.subscription.update({
    data: { isDeactivated: true },
    where: { userEmail: email },
  });
};
