import Pagination from '@/components/Pagination';

import PostList from '@/components/PostList';
import { authOptions } from '@/lib/auth';
import { getSortedPostsData } from '@/lib/posts';
import { Divider, Grid, Typography } from '@mui/material';
import { getServerSession } from 'next-auth';

export default async function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const session = await getServerSession(authOptions);
  const pageLimit = 9;
  const currentPage = Number(searchParams?.page) || 1;
  const allPostsData = getSortedPostsData({
    category: 'tilda-widgets',
    isAdmin: session?.user?.role === 'ADMIN',
  });

  return (
    <Grid container spacing={6} gridAutoRows={1}>
      <Grid item xs={12}>
        <Typography variant='h2'>Виджеты для Tilda</Typography>
        <Divider />
      </Grid>
      <PostList
        posts={allPostsData.slice(currentPage - 1, pageLimit)}
        basePath='/dev/tilda-widgets'
      />
      {Math.ceil(allPostsData.length / 9) > 1 && (
        <Grid item xs={12} className='flex items-center justify-center'>
          <Pagination totalPages={Math.ceil(allPostsData.length / pageLimit)} />
        </Grid>
      )}
    </Grid>
  );
}
