'use client';

// React Imports
import { useEffect, useState, useTransition } from 'react';

// MUI Imports
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

// Style Imports
import ConfirmationDialog from '../confirmation-dialog';

//Component Imports
import CustomTextField from '@core/components/mui/TextField';
import DialogCloseButton from '../DialogCloseButton';
import { useSession } from 'next-auth/react';
import { pricingData } from '@/data/pricing';
import dayjs from 'dayjs';
import { Alert, Backdrop, CircularProgress } from '@mui/material';

type UpgradePlanProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const UpgradePlan = ({ open, setOpen }: UpgradePlanProps) => {
  const popularPlan = pricingData.find((val) => val.popularPlan);
  const [isFetching, setIsFetching] = useState(false);

  const { data: session } = useSession();
  const [newPlan, setNewPlan] = useState(`${popularPlan?.id}_m`);

  async function onSubmit() {
    setIsFetching(true);
    const [type, period] = newPlan.split('_');

    await fetch('/api/subscription/update', {
      method: 'POST',
      body: JSON.stringify({
        email: session?.user?.email,
        type,
        period,
        pricePlan:
          period === 'm'
            ? pricingData.find((item) => item.id === type)?.monthlyPrice
            : pricingData.find((item) => item.id === type)?.yearlyPlan.annually,
      }),
    });
    window.location.assign('/subscription-result');
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        open={open && !isFetching}
        onClose={handleClose}
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogCloseButton onClick={() => setOpen(false)} disableRipple>
          <i className='tabler-x' />
        </DialogCloseButton>
        <DialogTitle
          variant='h4'
          className='flex flex-col gap-2 text-center sm:pbs-16 sm:pbe-6 sm:pli-16'
        >
          Обновить тариф
          <Typography component='span' className='flex flex-col text-center'>
            Выберите подходящий тариф
          </Typography>
        </DialogTitle>
        <DialogContent className='overflow-visible pbs-0 sm:pli-16 sm:pbe-16'>
          <div className='flex items-end gap-4 flex-col sm:flex-row'>
            <CustomTextField
              select
              fullWidth
              label='Тариф'
              onChange={(e) => setNewPlan(e.target.value)}
              value={newPlan}
              id='user-view-plans-select'
            >
              {pricingData.map((item) => (
                <MenuItem key={`${item.id}_m`} value={`${item.id}_m`}>
                  {item.title} - {item.monthlyPrice}₽/месяц
                </MenuItem>
              ))}
              {pricingData
                .filter((item) => item.id !== 'BASIC')
                .map((item) => (
                  <MenuItem key={`${item.id}_y`} value={`${item.id}_y`}>
                    {item.title} (Скидка 10%) - {item.yearlyPlan.annually}₽/год
                  </MenuItem>
                ))}
            </CustomTextField>
            <Button variant='contained' className='capitalize max-sm:is-full' onClick={onSubmit}>
              Обновить
            </Button>
          </div>
          <Alert severity='info' className='mt-5'>
            Деньги спишутся сразу после подключения
            <br />
            Старый тариф будет аннулирован
          </Alert>
        </DialogContent>
      </Dialog>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={isFetching}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  );
};

export default UpgradePlan;
