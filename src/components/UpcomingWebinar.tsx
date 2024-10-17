// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Third-party Imports
import classnames from 'classnames';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';
import prisma from '@/lib/prisma';
import dayjs from 'dayjs';
import Link from 'next/link';
import { links } from '@/data/links';

type DataType = {
  icon: string;
  slug: 'date' | 'duration';
  value: string;
};

// Vars
const data: DataType[] = [
  { icon: 'tabler-calendar', value: 'Дата', slug: 'date' },
  { icon: 'tabler-clock', value: 'Продолжительность', slug: 'duration' },
];

const UpcomingWebinar = async () => {
  const meeting = await prisma.meeting.findFirst({
    where: { date: { gte: new Date() } },
    orderBy: { 'date': 'asc' },
  });

  return (
    <Card className='h-full'>
      <CardContent className='flex flex-col gap-4'>
        <div className='flex justify-center pli-2.5 pbs-4 rounded bg-primaryLight'>
          <img src='/images/illustrations/characters/4.png' className='bs-[146px]' />
        </div>
        <div>
          <Typography variant='h5' className='mbe-2'>
            {meeting?.title}
          </Typography>
          <Typography variant='body2'>{meeting?.description}</Typography>
        </div>

        {meeting && (
          <>
            <div className='flex flex-wrap justify-between gap-4'>
              {data.map((item, i) => (
                <div key={i} className='flex items-center gap-3'>
                  <CustomAvatar variant='rounded' skin='light' color='primary'>
                    <i className={classnames('text-[28px]', item.icon)} />
                  </CustomAvatar>
                  <div>
                    <Typography color='text.primary' className='font-medium'>
                      {item.slug === 'date'
                        ? dayjs(meeting[item.slug]).format('DD.MM.YYYY HH:mm')
                        : item.slug === 'duration'
                          ? meeting.duration
                          : null}
                    </Typography>
                    <Typography variant='body2'>{item.value}</Typography>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={`${links.tg_service}?text=Привет, хочу записаться на вебинар '${meeting.title}'`}
              target='_blank'
            >
              <Button variant='contained' className='w-full'>
                Записаться
              </Button>
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingWebinar;
