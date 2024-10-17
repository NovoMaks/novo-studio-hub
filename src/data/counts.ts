import { Count } from '@prisma/client';

export const counts: Omit<Count, 'id'>[] = [
  {
    path: 'main',
    solutions: 0,
    articles: 0,
    utils: 0,
  },
];
