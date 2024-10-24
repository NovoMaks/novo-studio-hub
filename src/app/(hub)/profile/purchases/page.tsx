import Pagination from '@/components/Pagination';
import PostList from '@/components/PostList';
import AuthGuard from '@/hocs/AuthGuard';
import { authOptions } from '@/lib/auth';
import { getMyPurchases } from '@/lib/posts';
import { Divider, Grid, Typography } from '@mui/material';
import { getServerSession } from 'next-auth';

export default async function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const session = await getServerSession(authOptions);
  const pageLimit = 6;
  const currentPage = Number(searchParams?.page) || 1;
  const allPostsData = await getMyPurchases({
    purchases: session?.user?.purchases ?? [],
  });

  return (
    <AuthGuard>
      <Grid container spacing={6} gridAutoRows={1}>
        <Grid item xs={12}>
          <Typography variant='h2'>Мои покупки</Typography>
          <Divider />
        </Grid>
        <PostList
          posts={allPostsData?.slice(
            (currentPage - 1) * pageLimit,
            (currentPage - 1) * pageLimit + pageLimit,
          )}
        />
        {Math.ceil(allPostsData.length / 9) > 1 && (
          <Grid item xs={12} className='flex items-center justify-center'>
            <Pagination totalPages={Math.ceil(allPostsData.length / pageLimit)} />
          </Grid>
        )}
      </Grid>
    </AuthGuard>
  );
}
