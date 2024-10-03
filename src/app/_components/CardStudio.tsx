// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const CardStudio = () => {
  return (
    <Card className='bg-primary h-full'>
      <Link href='https://novo-studio.ru/' target='_blank'>
        <CardContent>
          <div className='flex items-center gap-2 mbe-4'>
            <i className='tabler-cube text-3xl text-white' />
            <Typography variant='h5' className='text-white'>
              Novo-studio
            </Typography>
          </div>
          <Typography className='mbe-4 text-white'>Ваш надёжный партнёр на старте</Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardStudio;
