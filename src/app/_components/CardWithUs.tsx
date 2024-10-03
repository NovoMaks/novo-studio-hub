// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CardWithUs = () => {
  return (
    <Card className='w-full'>
      <CardContent className='flex flex-col items-center text-center'>
        <Avatar className='mbe-2 is-[56px] bs-[56px]'>
          <i className='tabler-help-circle text-[32px]' />
        </Avatar>
        <Typography variant='h5' className='mbe-2'>
          Присоединяйся к нашей команде
        </Typography>
        <Typography color='text.secondary' className='mbe-4'>
          Если у тебя есть полезный контент, которым ты хочешь поделиться, отправь его нам, мы все
          проверим и опубликуем в хабе
        </Typography>
        <Button variant='contained'>Написать</Button>
      </CardContent>
    </Card>
  );
};

export default CardWithUs;
