// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes';

const horizontalMenuData = (): HorizontalMenuDataType[] => [
  {
    label: 'HUB',
    href: '/home',
    icon: 'tabler-smart-home',
  },
  {
    label: 'Разработка',
    icon: 'tabler-code-circle-2',
    children: [
      {
        label: 'Tilda виджеты',
        href: '/dev/tilda-widgets',
        icon: 'tabler-tilde',
      },
      {
        label: 'React',
        icon: 'tabler-brand-react',
      },
    ],
  },
  {
    label: 'Реклама',
    icon: 'tabler-ad-circle',
    children: [
      {
        label: 'Яндекс директ',
        icon: 'tabler-brand-yandex',
      },
    ],
  },
  {
    label: 'Дизайн',
    icon: 'tabler-palette',
  },
  {
    label: 'Документы',
    icon: 'tabler-vocabulary',
  },
];

export default horizontalMenuData;
