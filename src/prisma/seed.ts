import { counts } from '@/data/counts';
import { meetings } from '@/data/meetings';
import { topPosts } from '@/data/topPosts';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.topPost.deleteMany();
  await prisma.topPost.createMany({ data: topPosts });

  // await prisma.count.deleteMany();
  // await prisma.count.createMany({ data: counts });

  // await prisma.meeting.deleteMany();
  // await prisma.meeting.createMany({ data: meetings });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
