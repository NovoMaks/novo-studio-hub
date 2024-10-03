// MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Type Imports
import type { ThemeColor } from '@core/types';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';

type DataType = {
  title: string;
  views: string;
  icon: string;
  color: ThemeColor;
};

// Vars
const data: DataType[] = [
  {
    title: 'Videography Basic Design Course',
    views: '1.2k',
    icon: 'tabler-video',
    color: 'primary',
  },
  { title: 'Basic Front-end Development Course', views: '834', icon: 'tabler-code', color: 'info' },
  {
    title: 'Basic Fundamentals of Photography',
    views: '3.7k',
    icon: 'tabler-camera',
    color: 'success',
  },
  {
    title: 'Advance Dribble Base Visual Design',
    views: '2.5k',
    icon: 'tabler-brand-dribbble',
    color: 'warning',
  },
  { title: 'Your First Singing Lesson', views: '948', icon: 'tabler-microphone-2', color: 'error' },
];

const TopContent = () => {
  return (
    <Card className='w-full h-full'>
      <CardHeader title='🔝 Наш топ' />
      <CardContent className='flex flex-col gap-6'>
        {data.map((item, i) => (
          <div key={i} className='flex items-center gap-4'>
            <CustomAvatar variant='rounded' skin='light' color={item.color}>
              <i className={item.icon} />
            </CustomAvatar>
            <div className='flex justify-between items-center gap-4 is-full flex-wrap'>
              <Typography className='font-medium flex-1' color='text.primary'>
                {item.title}
              </Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopContent;
