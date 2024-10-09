import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Chip } from '@mui/material';

type Props = {
  title: string;
  imgUrl: string;
  urlId: string;
  isFree: boolean;
  description: string;
  basePath: string;
};

const PostCard = ({ title, imgUrl, urlId, description, basePath, isFree }: Props) => {
  return (
    <Card className='h-full relative'>
      <Link href={`${basePath}/${urlId}`}>
        {isFree && (
          <Chip
            className='absolute right-0 top-0'
            label='Бесплатно'
            size='small'
            variant='filled'
            color='primary'
          />
        )}
        <CardMedia image={imgUrl} className='bs-[200px]' />
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
