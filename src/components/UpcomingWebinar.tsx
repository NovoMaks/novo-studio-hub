// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Third-party Imports
import classnames from 'classnames';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';

type DataType = {
  icon: string;
  title: string;
  value: string;
};

// Vars
const data: DataType[] = [
  { icon: 'tabler-calendar', title: '17 января', value: 'Дата' },
  { icon: 'tabler-clock', title: '30 минут', value: 'Продолжительность' },
];

const UpcomingWebinar = () => {
  return (
    <Card className='h-full'>
      <CardContent className='flex flex-col gap-4'>
        <div className='flex justify-center pli-2.5 pbs-4 rounded bg-primaryLight'>
          <img src='/images/illustrations/characters/4.png' className='bs-[146px]' />
        </div>
        <div>
          <Typography variant='h5' className='mbe-2'>
            Ближайший вебинар
          </Typography>
          <Typography variant='body2'>Создание локального хранилища в Tilda</Typography>
        </div>
        <div className='flex flex-wrap justify-between gap-4'>
          {data.map((item, i) => (
            <div key={i} className='flex items-center gap-3'>
              <CustomAvatar variant='rounded' skin='light' color='primary'>
                <i className={classnames('text-[28px]', item.icon)} />
              </CustomAvatar>
              <div>
                <Typography color='text.primary' className='font-medium'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.value}</Typography>
              </div>
            </div>
          ))}
        </div>
        <Button variant='contained'>Записаться</Button>
      </CardContent>
    </Card>
  );
};

export default UpcomingWebinar;
