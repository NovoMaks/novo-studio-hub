'use client';
// MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import type { ButtonProps } from '@mui/material/Button';

// Type Imports
import type { PricingPlanType } from '@/types/pricingTypes';
import type { ThemeColor } from '@core/types';

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog';
import UpgradePlan from '@components/dialogs/upgrade-plan';
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick';
import { pricingData } from '@/data/pricing';

import dayjs from 'dayjs';
import { Chip, CircularProgress, Skeleton } from '@mui/material';
import { useSession } from 'next-auth/react';

const CurrentPlan = ({ data }: { data?: PricingPlanType[] }) => {
  const { data: session, status } = useSession();
  const buttonProps = (
    children: string,
    color: ThemeColor,
    variant: ButtonProps['variant'],
  ): ButtonProps => ({
    children,
    variant,
    color,
  });

  const plan = session?.subscription?.type
    ? pricingData.find((val) => val.id === session?.subscription?.type)
    : null;

  const popularPlan = pricingData.find((val) => val.popularPlan);

  const startDate = session?.subscription?.startDate
    ? dayjs(session?.subscription?.startDate)
    : null;
  const endDate = session?.subscription?.endDate ? dayjs(session?.subscription?.endDate) : null;

  if (status === 'loading') {
    return (
      <div className='w-full flex items-center justify-center mt-8'>
        <CircularProgress className='mx-auto' />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader title={`Ваша подписка`} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              {session?.subscription?.isDeactivated && (
                <Chip className='w-fit mt-0 mb-4' color='warning' label='Отменена' />
              )}
              <Typography color='text.primary' className='font-medium'>
                Тариф: {plan?.title}{' '}
                {session?.subscription?.pricePlan &&
                  endDate &&
                  startDate &&
                  `(${session.subscription.pricePlan}₽/${endDate?.diff(startDate, 'day') > 300 ? 'год' : 'месяц'})`}
              </Typography>
              <Typography>{plan?.subtitle}</Typography>
            </div>
            <div className='flex flex-col gap-1'>
              <Typography color='text.primary' className='font-medium'>
                {session?.subscription?.endDate
                  ? session?.subscription?.isDeactivated
                    ? `Активна до ${dayjs(session?.subscription?.endDate).format('DD.MM.YYYY')}`
                    : `Следующее списание: ${dayjs(session?.subscription?.endDate).format('DD.MM.YYYY')}`
                  : 'Безлимит'}
              </Typography>
              {!!session?.subscription?.endDate && !session?.subscription?.isDeactivated && (
                <Typography>Мы отправим Вам email за 1 день до списания</Typography>
              )}
            </div>
            {session?.subscription?.type === 'BASIC' && (
              <div className='flex flex-col gap-1'>
                <Typography color='text.primary' className='font-medium mb-2'>
                  Обнови свой тариф и получи больше возможностей
                </Typography>
                <div className='flex items-center gap-1.5'>
                  <Typography color='text.primary' className='font-medium'>
                    Всего {popularPlan?.monthlyPrice}₽ в месяц
                  </Typography>
                  <Chip color='primary' variant='tonal' label='Популярный' size='small' />
                </div>
                <Typography>{popularPlan?.subtitle}</Typography>
              </div>
            )}
          </Grid>
          <Grid item xs={12} md={6} className='flex flex-col gap-6'>
            {session?.subscription?.endDate && (
              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <Typography color='text.primary' className='font-medium'>
                    Прошло
                  </Typography>
                  <Typography color='text.primary' className='font-medium'>
                    {dayjs().diff(startDate, 'day') + 1} из{' '}
                    {(endDate?.diff(startDate, 'day') ?? 0) + 1} дней
                  </Typography>
                </div>
                <LinearProgress
                  variant='determinate'
                  value={
                    ((dayjs().diff(startDate, 'day') + 1) /
                      ((endDate?.diff(startDate, 'day') ?? 1) + 1)) *
                    100
                  }
                />
              </div>
            )}
          </Grid>
          <Grid item xs={12} className='flex gap-4 flex-wrap'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Обновить тариф', 'primary', 'contained')}
              dialog={UpgradePlan}
              dialogProps={{ data: data }}
            />
            {plan?.id !== 'BASIC' && !session?.subscription?.isDeactivated && (
              <OpenDialogOnElementClick
                element={Button}
                elementProps={buttonProps('Отменить подписку', 'error', 'tonal')}
                dialog={ConfirmationDialog}
                dialogProps={{
                  type: 'unsubscribe',
                }}
              />
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CurrentPlan;
