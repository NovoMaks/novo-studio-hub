'use server';
import prisma from '@/lib/prisma';
import { TildaWidgetsPost } from '@prisma/client';

export const getTildaWidgetsPostList = async (page: number) => {
  const pageSize = 10;
  return prisma.tildaWidgetsPost.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { createdAt: 'desc' },
  });
};

export const createTildaWidgetsPost = async (postInfo: {
  urlId: TildaWidgetsPost['urlId'];
  title: TildaWidgetsPost['title'];
  imgUrl: TildaWidgetsPost['imgUrl'];
  description: TildaWidgetsPost['description'];
  markdown: TildaWidgetsPost['markdown'];
  isFree: TildaWidgetsPost['isFree'];
}) => {
  return prisma.tildaWidgetsPost.create({ data: postInfo });
};
