import { Grid } from '@mui/material';
import PostCard from './post/PostCard';
import { Post } from '@/types/post';

const PostList = async ({ basePath, posts }: { basePath: string; posts: Post[] }) => {
  return (
    <>
      {posts.map((post) => (
        <Grid key={post.slug} item xs={12} sm={6} md={4}>
          <PostCard {...post} basePath={basePath} />
        </Grid>
      ))}
    </>
  );
};

export default PostList;
