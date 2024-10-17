// MUI Imports
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Third-party Imports
import classnames from 'classnames';

// Types Imports
import type { ThemeColor } from '@core/types';
import Link from 'next/link';
import { links } from '@/data/links';

type DataType = {
  title: string;
  description: string;
  image: string;
  color: ThemeColor;
  imageColorClass?: string;
  bgColorClass?: string;
  link: string;
};

// Vars
const data: DataType[] = [
  {
    title: 'Помощь в установке',
    description: 'Мы поможем установить и протестировать виджет на твоем сайте',
    image: '/images/illustrations/characters/8.png',
    color: 'primary',
    imageColorClass: 'bg-primaryLight',
    bgColorClass: 'bg-primaryLighter',
    link: `${links.tg_service}?text=Привет, помоги установить виджет`,
  },
  {
    title: 'Кастомизация',
    description: 'Изменим виджет по твоим требованиям или создадим новый',
    image: '/images/illustrations/characters/9.png',
    color: 'error',
    imageColorClass: 'bg-errorLight',
    bgColorClass: 'bg-errorLighter',
    link: `${links.tg_service}?text=Привет, давай сделаем виджет`,
  },
];

const ServicesCards = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Link href={item.link} target='_blank'>
            <div
              className={classnames(
                'flex max-sm:flex-col items-center sm:items-start justify-between gap-6 rounded p-6 h-full',
                item.bgColorClass,
              )}
            >
              <div className='flex flex-col items-center sm:items-start max-sm:text-center'>
                <Typography variant='h5' color={item.color} className='mbe-2'>
                  {item.title}
                </Typography>
                <Typography className='mbe-4'>{item.description}</Typography>
              </div>
              <div
                className={classnames(
                  'flex justify-center rounded min-is-[180px] max-sm:-order-1 pbs-[7px]',
                  item.imageColorClass,
                )}
              >
                <img src={item.image} alt={item.title} className={classnames('bs-[120px]')} />
              </div>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesCards;
