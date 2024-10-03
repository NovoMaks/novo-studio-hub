// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardTelegram = () => {
  return (
    <Card className='bg-twitter h-full'>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <i className='tabler-brand-telegram text-3xl text-white' />
          <Typography variant='h5' className='text-white'>
            Телеграм
          </Typography>
        </div>
        <Typography className='mbe-4 text-white'>
          Подпишись на наш канал, чтобы ничего не пропустить
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTelegram;
