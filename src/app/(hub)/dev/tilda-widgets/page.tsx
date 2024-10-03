import PostCard from '@/components/post/PostCard';
import { Divider, Grid, Typography } from '@mui/material';

export default function Page() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h2'>Виджеты для Tilda</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PostCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PostCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PostCard />
      </Grid>
    </Grid>
  );
}
