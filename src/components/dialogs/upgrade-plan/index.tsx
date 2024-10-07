'use client';

// React Imports
import { useState } from 'react';

// MUI Imports
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

// Style Imports
import ConfirmationDialog from '../confirmation-dialog';

//Component Imports
import CustomTextField from '@core/components/mui/TextField';
import DialogCloseButton from '../DialogCloseButton';
import { useSession } from 'next-auth/react';
import { pricingData } from '@/data/pricing';
import dayjs from 'dayjs';

type UpgradePlanProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const UpgradePlan = ({ open, setOpen }: UpgradePlanProps) => {
  const popularPlan = pricingData.find((val) => val.popularPlan);

  const { data: session, update: updateSession } = useSession();
  const [newPlan, setNewPlan] = useState(`${popularPlan?.id}_m`);

  const plan = session?.subscription?.type
    ? pricingData.find((val) => val.id === session?.subscription?.type)
    : null;

  const startDate = session?.subscription?.startDate
    ? dayjs(session?.subscription?.startDate)
    : null;
  const endDate = session?.subscription?.endDate ? dayjs(session?.subscription?.endDate) : null;

  // States
  const [openConfirmation, setOpenConfirmation] = useState(false);

  async function onSubmit() {
    const [type, period] = newPlan.split('_');

    const newSubs = await fetch('/api/subscription/update', {
      method: 'POST',
      body: JSON.stringify({
        email: session?.user?.email,
        type,
        endDate:
          period === 'm' ? dayjs().add(1, 'month').toDate() : dayjs().add(1, 'year').toDate(),
        pricePlan:
          period === 'm'
            ? pricingData.find((item) => item.id === type)?.monthlyPrice
            : pricingData.find((item) => item.id === type)?.yearlyPlan.annually,
      }),
    });
    const data = await newSubs.json();
    await updateSession();
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        open={open}
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
          {session?.subscription?.type !== 'BASIC' && endDate && startDate && (
            <>
              <Divider className='mlb-6' />
              <div className='flex flex-col gap-1'>
                <Typography variant='body2'>Ваш текущий план</Typography>
                <div className='flex items-center justify-between flex-wrap gap-2'>
                  <div className='flex justify-center items-baseline gap-1'>
                    <Typography component='span' color='primary' variant='h1'>
                      {session?.subscription?.pricePlan}₽
                    </Typography>
                    <Typography variant='body2' component='sub' className='self-baseline'>
                      /{endDate?.diff(startDate, 'day') > 300 ? 'год' : 'месяц'}
                    </Typography>
                  </div>
                  <Button
                    variant='tonal'
                    className='capitalize'
                    color='error'
                    onClick={() => setOpenConfirmation(true)}
                  >
                    Отменить подписку
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <ConfirmationDialog
        open={openConfirmation}
        setOpen={setOpenConfirmation}
        type='unsubscribe'
      />
    </>
  );
};

export default UpgradePlan;
