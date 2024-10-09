// Next Imports
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { PrismaSchemas } from '@/types/post';
import { TildaWidgetsPost } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse<{ message: string }>> {
  const body: TildaWidgetsPost & { prismaSchema: PrismaSchemas } = await req.json();
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Not admin' });
  }
  const { prismaSchema, ...newData } = body;
  try {
    await prisma[prismaSchema].create({
      data: newData,
    });
    return NextResponse.json({ message: 'OK' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error as string });
  }
}
