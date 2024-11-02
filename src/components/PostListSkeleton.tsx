import { Card, CardContent, CardMedia, Grid, Skeleton } from '@mui/material';

const PostListSkeleton = async () => {
  return (
    <>
      {[1, 2, 3].map((_, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <Card className='relative'>
            <Skeleton height={200} variant='rectangular' />
            <CardContent className='gap-3 flex flex-col'>
              <Skeleton height={20} variant='rounded' />
              <Skeleton height={10} variant='rounded' />
              <Skeleton height={10} variant='rounded' />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default PostListSkeleton;
