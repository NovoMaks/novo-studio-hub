import Pagination from '@/components/Pagination';

import PostList from '@/components/PostList';
import WidgetHelpCards from '@/components/WidgetHelpCards';
import { authOptions } from '@/lib/auth';
import { getSortedPostsData } from '@/lib/posts';
import { Divider, Grid, Typography } from '@mui/material';
import { getServerSession } from 'next-auth';

export default async function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const session = await getServerSession(authOptions);
  const pageLimit = 6;
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
      <Grid item xs={12}>
        <WidgetHelpCards />
      </Grid>
      <PostList
        posts={allPostsData?.slice(
          (currentPage - 1) * pageLimit,
          (currentPage - 1) * pageLimit + pageLimit,
        )}
      />
      {Math.ceil(allPostsData.length / pageLimit) > 1 && (
        <Grid item xs={12} className='flex items-center justify-center'>
          <Pagination totalPages={Math.ceil(allPostsData.length / pageLimit)} />
        </Grid>
      )}
    </Grid>
  );
}
