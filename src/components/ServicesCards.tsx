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
  imageColorClass?: string;
  bgColorClass?: string;
  link: string;
};

// Vars
const data: DataType[] = [
  {
    title: 'Создание сайтов и виджетов',
    description:
      'Наши профессиональные дизайнеры и программисты воплотят ваши идеи в жизнь, сделав ресурс ярким и функциональным',
    image: '/images/illustrations/objects/web.svg',
    imageColorClass: 'bg-primaryLight',
    bgColorClass: 'bg-primaryLighter',
    link: `${links.tg_service}?text=Привет, помоги создать сайт`,
  },
  {
    title: 'Яндекс реклама',
    description:
      'Настраиваем контекстную рекламу в Яндексе, которая поможет привлечь новых клиентов и увеличить продажи',
    image: '/images/illustrations/objects/ad.svg',
    link: `${links.tg_service}?text=Привет, помоги настроить рекламу`,
  },
  {
    title: 'Web-приложения и Telegram-боты',
    description: 'Разрабатываем сложные проекты web приложений и телеграм ботов',
    image: '/images/illustrations/objects/app.svg',
    link: `${links.tg_service}?text=Привет, помоги  написать web-приложение`,
  },
  {
    title: 'SMM',
    description: 'Занимаемся полным ведением страницы в любой из соцсетей',
    image: '/images/illustrations/objects/smm.svg',
    link: `${links.tg_service}?text=Привет, помоги c SMM`,
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
                'flex max-sm:flex-col items-center sm:items-start justify-between gap-6 rounded p-6 h-full bg-primaryLighter',
              )}
            >
              <div className='flex flex-col items-center sm:items-start max-sm:text-center'>
                <Typography variant='h5' color='primary' className='mbe-2'>
                  {item.title}
                </Typography>
                <Typography className='mbe-4'>{item.description}</Typography>
              </div>
              <div
                className={classnames(
                  'flex justify-center rounded min-is-[180px] max-sm:-order-1 items-center bg-primaryLight',
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
