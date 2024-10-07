import { Subscription } from '@prisma/client';

export type PricingPlanType = {
  id: Subscription['type'];
  title: string;
  imgSrc: string;
  subtitle: string;
  imgWidth?: number;
  imgHeight?: number;
  popularPlan: boolean;
  monthlyPrice: number;
  planBenefits: string[];
  yearlyPlan: {
    monthly: number;
    annually: number;
  };
};
