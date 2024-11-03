import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Button, Chip } from '@mui/material';
import { Post } from '@/types/post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import PostImage from './PostImage';

const PostCard = async ({
  title,
  slug,
  description,
  coverImage,
  price,
  status,
  category,
  tags,
}: Post) => {
  const session = await getServerSession(authOptions);
  const tagsArr = !!tags?.trim() ? tags.trim().split('/') : [];
  const isBought = !!session?.user?.purchases?.find(
    (p) => p.slug === slug && p.category === category,
  );
  return (
    <Card className='h-full relative flex flex-col'>
      {!price ? (
        <Chip
          className='absolute right-0 top-0'
          label='Бесплатно'
          size='small'
          variant='filled'
          color='primary'
        />
      ) : isBought ? (
        <Chip
          className='absolute right-0 top-0'
          label={'Куплено'}
          size='small'
          variant='filled'
          color='success'
        />
      ) : (
        <Chip
          className='absolute right-0 top-0'
          label={
            <Typography className='flex justify-center items-center text-sm text-white'>
              {price}
              <i className='tabler-currency-rubel text-sm' />
            </Typography>
          }
          size='small'
          variant='filled'
          color='info'
        />
      )}

      {status === 'draft' && (
        <Chip
          className='absolute left-0 top-0'
          label='Черновик'
          size='small'
          variant='filled'
          color='error'
        />
      )}

      <PostImage coverImage={coverImage.replace('http://', 'https://')} alt={title} />
      <CardContent className='flex-1 flex flex-col'>
        <div className='flex flex-col mb-4'>
          <Typography variant='h5' className='mbe-2'>
            {title}
          </Typography>
          <Typography color='text.secondary' className='whitespace-pre-wrap'>
            {description}
          </Typography>
          {tagsArr.length > 0 && (
            <div className='flex flex-wrap gap-3 mt-3'>
              {tagsArr.map((tag) => (
                <Chip label={tag} size='small' variant='filled' color='primary' />
              ))}
            </div>
          )}
        </div>
        {isBought || !price ? (
          <Button
            className='mt-auto'
            variant='outlined'
            color='success'
            href={`/${category}/${slug}`}
          >
            Смотреть
          </Button>
        ) : (
          <Button
            className='mt-auto'
            variant='outlined'
            color='primary'
            href={`/${category}/${slug}`}
          >
            Купить
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PostCard;
