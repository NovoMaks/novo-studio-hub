// Type Imports
import type { PricingPlanType } from '@/types/pricingTypes';

export const pricingData: PricingPlanType[] = [
  {
    id: 'BASIC',
    title: 'Базовый',
    monthlyPrice: 0,
    popularPlan: false,
    subtitle: 'Хороший старт',
    imgSrc: '/images/illustrations/objects/pricing-basic.png',
    imgHeight: 120,
    yearlyPlan: {
      monthly: 0,
      annually: 0,
    },
    planBenefits: ['Доступ к бесплатному контенту', 'Бесплатные вебинары'],
  },
  {
    id: 'STANDARD',
    monthlyPrice: 200,
    title: 'Стандарт',
    popularPlan: true,
    subtitle: 'Учись без ограничений',
    imgSrc: '/images/illustrations/objects/pricing-standard.png',
    imgHeight: 120,
    yearlyPlan: {
      monthly: 180,
      annually: 2160,
    },
    planBenefits: ['Доступ к платному контенту', 'Платные вебинары'],
  },
  {
    id: 'PRO',
    monthlyPrice: 400,
    popularPlan: false,
    title: 'Продвинутый',
    subtitle: 'Все включено',
    imgSrc: '/images/illustrations/objects/pricing-enterprise.png',
    imgHeight: 120,
    yearlyPlan: {
      monthly: 360,
      annually: 4320,
    },
    planBenefits: ['Доступ к платному контенту', 'Платные вебинары', 'Личный помощьник/наставник'],
  },
];
