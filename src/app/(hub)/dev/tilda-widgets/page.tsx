import Pagination from '@/components/Pagination';

import PostList from '@/components/PostList';
import prisma from '@/lib/prisma';
import { Divider, Grid, Typography } from '@mui/material';

export default async function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = Number(searchParams?.page) || 1;

  const totalPosts = await prisma.tildaWidgetsPost.count();

  return (
    <Grid container spacing={6} gridAutoRows={1}>
      <Grid item xs={12}>
        <Typography variant='h2'>Виджеты для Tilda</Typography>
        <Divider />
      </Grid>
      <PostList currentPage={currentPage} basePath='/dev/tilda-widgets' />
      {Math.ceil(totalPosts / 9) > 1 && (
        <Grid item xs={12} className='flex items-center justify-center'>
          <Pagination totalPages={Math.ceil(totalPosts / 9)} />
        </Grid>
      )}
    </Grid>
  );
}
