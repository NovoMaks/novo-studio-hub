// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes';

const horizontalMenuData = (): HorizontalMenuDataType[] => [
  {
    label: 'HUB',
    href: '/home',
    icon: 'tabler-smart-home',
  },
  {
    label: 'Tilda',
    icon: 'tabler-info-circle',
    children: [
      {
        label: 'Готовые компоненты',
        href: '/tilda',
        icon: 'tabler-info-circle',
      },
    ],
  },
];

export default horizontalMenuData;
