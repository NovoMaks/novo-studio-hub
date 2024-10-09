// MUI Imports
import { Grid } from '@mui/material';
import PostCard from './post/PostCard';
import prisma from '@/lib/prisma';

const PostList = async ({ currentPage, basePath }: { currentPage: number; basePath: string }) => {
  const postList = await prisma.tildaWidgetsPost.findMany({
    select: {
      title: true,
      imgUrl: true,
      urlId: true,
      description: true,
      isFree: true,
    },
  });
  return (
    <>
      {postList.map((post) => (
        <Grid key={post.urlId} item xs={12} sm={6} md={4}>
          <PostCard {...post} basePath={basePath} />
        </Grid>
      ))}
    </>
  );
};

export default PostList;
