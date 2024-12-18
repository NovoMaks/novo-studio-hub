'use server';
import prisma from '@/lib/prisma';
import { User } from '@prisma/client';
import dayjs from 'dayjs';

export const getUserInfoByEmailData = async (email: string) => {
  return prisma.user.findFirst({
    where: { email },
  });
};

export const createLoginData = async ({
  name,
  email,
  image,
}: {
  name?: User['name'];
  email?: User['email'];
  image?: User['image'];
}) => {
  if (!name || !email) {
    return [null, null];
  }
  return prisma.$transaction([
    prisma.user.upsert({
      create: { name, email, purchases: [] },
      update: { name, image },
      where: { email: email },
    }),
    prisma.subscription.upsert({
      create: {
        userEmail: email,
        pricePlan: 0,
        isDeactivated: false,
        startDate: dayjs().startOf('d').toDate(),
      },
      update: {},
      where: { userEmail: email },
    }),
  ]);
};

export const addUserPurchase = async ({
  email,
  purchase,
}: {
  email: string;
  purchase: User['purchases']['0'];
}) => {
  return prisma.user.update({
    where: { email },
    data: { purchases: { push: purchase } },
  });
};
