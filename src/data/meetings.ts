import { Meeting } from '@prisma/client';
import dayjs from 'dayjs';

export const meetings: Omit<Meeting, 'id'>[] = [
  {
    url: 'https://t.me/novms?text=%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B2%20%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B3%D0%B5',
    title: 'Тестовый митинг 1',
    description: 'Какое-то его описание',
    date: dayjs('2025-02-02').toDate(),
    duration: '30:00',
    slug: '1',
  },
  {
    url: 'https://t.me/novms?text=%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B2%20%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B3%D0%B5',
    title: 'Тестовый митинг 2',
    description: 'Какое-то его описание',
    date: dayjs('2025-03-03').toDate(),
    duration: '20:00',
    slug: '2',
  },
];
