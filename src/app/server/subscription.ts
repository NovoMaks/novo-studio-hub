'use server';
import { PrismaClient, Subscription } from '@prisma/client';
const prisma = new PrismaClient();

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
    data: { type, endDate, pricePlan },
    where: { userEmail: email },
  });
};

export const updateNextSubscription = async ({
  email,
  next,
}: {
  email: Subscription['userEmail'];
  next: Subscription['next'];
}) => {
  return prisma.subscription.update({
    data: { next },
    where: { userEmail: email },
  });
};
