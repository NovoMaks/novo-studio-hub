import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const PostCard = () => {
  return (
    <Card>
      <Link href='/'>
        <CardMedia image='/images/tilda-components/1.png' className='bs-[200px]' />
        <CardContent>
          <Typography variant='h5' className='mbe-2'>
            Influencing The Influencer
          </Typography>
          <Typography color='text.secondary'>
            Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the
            state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two
            years ago.
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PostCard;
