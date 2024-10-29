// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes';

const horizontalMenuData = (): HorizontalMenuDataType[] => [
  {
    label: 'HUB',
    href: '/home',
    icon: 'tabler-smart-home',
  },
  {
    label: 'Tilda виджеты',
    href: '/tilda-widgets',
    icon: 'tabler-tilde',
  },
  {
    label: 'Яндекс директ',
    icon: 'tabler-brand-yandex',
    href: '/ya-direct',
  },
  // {
  //   label: 'Дизайн',
  //   icon: 'tabler-palette',
  // },
  // {
  //   label: 'Документы',
  //   icon: 'tabler-vocabulary',
  // },
];

export default horizontalMenuData;
