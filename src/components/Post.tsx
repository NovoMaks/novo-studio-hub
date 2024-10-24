import PrismLoader from '@/components/PrismLoader';
import { Post as PostType } from '@/types/post';
import { Typography } from '@mui/material';
import Image from 'next/image';
const Post = ({ postInfo }: { postInfo: PostType }) => {
  return (
    <div className='max-w-screen-md mx-auto overflow-hidden'>
      <Typography variant='h1' className='mb-2'>
        {postInfo.title}
      </Typography>
      <img className='w-full mb-8' src={postInfo.coverImage} alt={postInfo.title} />
      <div
        className='w-full overflow-hidden post'
        dangerouslySetInnerHTML={{ __html: postInfo.content ?? '' }}
      ></div>
      <PrismLoader />
    </div>
  );
};

export default Post;
