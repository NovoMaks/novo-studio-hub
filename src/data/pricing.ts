// Type Imports
import type { PricingPlanType } from '@/types/pricingTypes';

export const pricingData: PricingPlanType[] = [
  {
    title: 'Базовый',
    monthlyPrice: 0,
    currentPlan: true,
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
    monthlyPrice: 200,
    title: 'Стандарт',
    popularPlan: true,
    currentPlan: false,
    subtitle: 'Учись без ограничений',
    imgSrc: '/images/illustrations/objects/pricing-standard.png',
    imgHeight: 120,
    yearlyPlan: {
      monthly: 200,
      annually: 1000,
    },
    planBenefits: ['Доступ к платному контенту', 'Платные вебинары'],
  },
  {
    monthlyPrice: 99,
    popularPlan: false,
    currentPlan: false,
    title: 'Продвинутый',
    subtitle: 'Все включено',
    imgSrc: '/images/illustrations/objects/pricing-enterprise.png',
    imgHeight: 120,
    yearlyPlan: {
      monthly: 500,
      annually: 2000,
    },
    planBenefits: ['Доступ к платному контенту', 'Платные вебинары', 'Личный помощьник/наставник'],
  },
];
