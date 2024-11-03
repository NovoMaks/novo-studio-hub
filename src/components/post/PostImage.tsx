'use client';
import Image from 'next/image';

const PostImage = async ({ alt, coverImage }: { coverImage: string; alt: string }) => {
  return (
    <Image
      src={coverImage.replace('http://', 'https://')}
      alt={alt}
      className='w-full h-[200px] object-cover'
      width={0}
      height={0}
    />
  );
};

export default PostImage;
