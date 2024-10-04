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
      monthly: 180,
      annually: 2160,
    },
    planBenefits: ['Доступ к платному контенту', 'Платные вебинары'],
  },
  {
    monthlyPrice: 400,
    popularPlan: false,
    currentPlan: false,
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
