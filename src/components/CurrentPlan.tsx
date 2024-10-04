// MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LinearProgress from '@mui/material/LinearProgress';
import type { ButtonProps } from '@mui/material/Button';

// Type Imports
import type { PricingPlanType } from '@/types/pricingTypes';
import type { ThemeColor } from '@core/types';

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog';
import UpgradePlan from '@components/dialogs/upgrade-plan';
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick';

const CurrentPlan = ({ data }: { data?: PricingPlanType[] }) => {
  const buttonProps = (
    children: string,
    color: ThemeColor,
    variant: ButtonProps['variant'],
  ): ButtonProps => ({
    children,
    variant,
    color,
  });

  return (
    <Card>
      <CardHeader title='Подписка' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <Typography color='text.primary' className='font-medium'>
                Базовый
              </Typography>
              <Typography>Хороший старт</Typography>
            </div>
            <div className='flex flex-col gap-1'>
              <Typography color='text.primary' className='font-medium'>
                Активна до 10.01.2025
              </Typography>
              <Typography>Мы отправим Вам email, когда подписка закончится</Typography>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-1.5'>
                <Typography color='text.primary' className='font-medium'>
                  200₽ в месяц
                </Typography>
                <Chip color='primary' variant='tonal' label='Популярный' size='small' />
              </div>
              <Typography>Учись без ограничений</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center justify-between'>
                <Typography color='text.primary' className='font-medium'>
                  Прошло
                </Typography>
                <Typography color='text.primary' className='font-medium'>
                  12 из 30 дней
                </Typography>
              </div>
              <LinearProgress variant='determinate' value={20} />
              <Typography variant='body2'>Осталось 18 дней до конца подписки</Typography>
            </div>
          </Grid>
          <Grid item xs={12} className='flex gap-4 flex-wrap'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Обновить план', 'primary', 'contained')}
              dialog={UpgradePlan}
              dialogProps={{ data: data }}
            />
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Отменить подписку', 'error', 'tonal')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'unsubscribe' }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CurrentPlan;
