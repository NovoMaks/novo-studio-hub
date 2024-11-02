import MainLoader from '@/components/MainLoader';
import Pagination from '@/components/Pagination';

import PostList from '@/components/PostList';
import PostListSkeleton from '@/components/PostListSkeleton';
import { authOptions } from '@/lib/auth';
import { getSortedPostsData } from '@/lib/posts';
import { Divider, Grid, Typography } from '@mui/material';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';

export default async function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const session = await getServerSession(authOptions);
  const pageLimit = 6;
  const currentPage = Number(searchParams?.page) || 1;

  const allPostsData = getSortedPostsData({
    category: 'ya-direct',
    isAdmin: session?.user?.role === 'ADMIN',
  });

  return (
    <Grid container spacing={6} gridAutoRows={1}>
      <Grid item xs={12}>
        <Typography variant='h2'>Яндекс директ</Typography>
        <Divider />
      </Grid>
      <Suspense fallback={<PostListSkeleton />}>
        <PostList
          posts={allPostsData?.slice(
            (currentPage - 1) * pageLimit,
            (currentPage - 1) * pageLimit + pageLimit,
          )}
        />
      </Suspense>
      {Math.ceil(allPostsData.length / pageLimit) > 1 && (
        <Grid item xs={12} className='flex items-center justify-center'>
          <Pagination totalPages={Math.ceil(allPostsData.length / pageLimit)} />
        </Grid>
      )}
    </Grid>
  );
}
