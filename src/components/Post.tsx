import PrismLoader from '@/components/PrismLoader';
const Post = ({ content }: { content: string }) => {
  return (
    <>
      <div
        className='max-w-screen-md mx-auto overflow-hidden post'
        dangerouslySetInnerHTML={{ __html: content ?? '' }}
      ></div>
      <PrismLoader />
    </>
  );
};

export default Post;
