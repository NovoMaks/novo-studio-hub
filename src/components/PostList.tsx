// MUI Imports
import { Grid } from '@mui/material';
import PostCard from './post/PostCard';

const PostList = ({ currentPage }: { currentPage: number }) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <PostCard />
        </Grid>
      ))}
    </>
  );
};

export default PostList;
