import { Grid } from '@mui/material';
import PostCard from './post/PostCard';
import { Post } from '@/types/post';

const PostList = async ({ posts }: { posts: Post[] }) => {
  return (
    <>
      {posts.map((post) => (
        <Grid key={post.slug} item xs={12} sm={6} md={4}>
          <PostCard {...post} />
        </Grid>
      ))}
    </>
  );
};

export default PostList;
