import { TopPost } from '@prisma/client';
import dayjs from 'dayjs';

export const topPosts: Omit<TopPost, 'id'>[] = [
  {
    url: '/tilda-widgets/test-platnogo-kontenta',
    title: 'Виджет Тест 1',
    price: 100,
    logo: 'tabler-a-b-2',
    type: 'solution',
  },
  {
    url: '/tilda-widgets/test',
    title: 'Виджет Тест 1',
    price: 0,
    logo: 'tabler-abacus',
    type: 'solution',
  },
];
