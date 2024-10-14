import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Chip } from '@mui/material';
import { Post } from '@/types/post';

const PostCard = ({
  basePath,
  title,
  slug,
  description,
  coverImage,
  isFree,
  status,
}: Post & { basePath: string }) => {
  return (
    <Card className='h-full relative'>
      <Link href={`${basePath}/${slug}`}>
        {isFree ? (
          <Chip
            className='absolute right-0 top-0'
            label='Бесплатно'
            size='small'
            variant='filled'
            color='primary'
          />
        ) : (
          <Chip
            className='absolute right-0 top-0'
            label='По подписке'
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
        <CardMedia image={coverImage} className='bs-[200px]' />
        <CardContent>
          <Typography variant='h5' className='mbe-2'>
            {title}
          </Typography>
          <Typography color='text.secondary' className='whitespace-pre-wrap'>
            {description}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PostCard;
