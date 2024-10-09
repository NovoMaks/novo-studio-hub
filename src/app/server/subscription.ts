'use server';
import prisma from '@/lib/prisma';
import { Subscription } from '@prisma/client';
import dayjs from 'dayjs';

export const updateSubscription = async ({
  email,
  type,
  pricePlan,
  period,
}: {
  email: Subscription['userEmail'];
  type: Subscription['type'];
  period: 'm' | 'y';
  pricePlan: Subscription['pricePlan'];
}) => {
  return prisma.subscription.update({
    data: {
      type,
      endDate:
        type === 'BASIC'
          ? null
          : dayjs()
              .startOf('d')
              .add(1, period === 'm' ? 'month' : 'year')
              .toDate(),
      pricePlan,
      startDate: dayjs().startOf('d').toDate(),
      isDeactivated: false,
    },
    where: { userEmail: email },
  });
};

export const deactivateSubscription = async ({ email }: { email: Subscription['userEmail'] }) => {
  return prisma.subscription.update({
    data: { isDeactivated: true },
    where: { userEmail: email },
  });
};
