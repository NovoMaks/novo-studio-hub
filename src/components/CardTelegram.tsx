// MUI Imports
import { links } from '@/data/links';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const CardTelegram = () => {
  return (
    <Card className='bg-twitter h-full'>
      <Link href={`${links.tg_service}?text=Привет, есть вопрос!`} target='_blank'>
        <CardContent>
          <div className='flex items-center gap-2 mbe-4'>
            <i className='tabler-brand-telegram text-3xl text-white' />
            <Typography variant='h5' className='text-white'>
              Телеграм
            </Typography>
          </div>
          <Typography className='mbe-4 text-white'>
            Обратная связь, предложения, заказ услуг или просто хотите пообщаться
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardTelegram;
