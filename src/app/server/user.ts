'use server';
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

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
      create: { name, email },
      update: { name, image },
      where: { email: email },
    }),
    prisma.subscription.upsert({
      create: {
        userEmail: email,
        pricePlan: 0,
      },
      update: {},
      where: { userEmail: email },
    }),
  ]);
};
