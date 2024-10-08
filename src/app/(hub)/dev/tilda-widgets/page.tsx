import Pagination from '@/components/Pagination';

import PostList from '@/components/PostList';
import { Divider, Grid, Typography } from '@mui/material';

export default function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = Number(searchParams?.page) || 1;

  //const totalPages = await fetchInvoicesPages(query);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h2'>Виджеты для Tilda</Typography>
        <Divider />
      </Grid>
      <PostList currentPage={currentPage} />
      <Grid item xs={12} className='flex items-center justify-center'>
        <Pagination totalPages={2} />
      </Grid>
    </Grid>
  );
}
