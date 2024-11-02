'use client';

// Next Imports
import Link from 'next/link';

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// Third-party Imports
import classnames from 'classnames';

// Type Imports
import type { SystemMode } from '@core/types';

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant';
import MainLoader from '@/components/MainLoader';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { OrderStatus } from '@prisma/client';

// Styled Components
const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1,
});

const Payment = ({ mode }: { mode: SystemMode }) => {
  // Vars
  const darkImg = '/images/pages/misc-mask-dark.png';
  const lightImg = '/images/pages/misc-mask-light.png';
  const { push } = useRouter();

  // Hooks
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down('md'));
  const miscBackground = useImageVariant(mode, lightImg, darkImg);

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/';
  const orderId = searchParams.get('orderID') || '';

  useEffect(() => {
    checkPayment();
  }, []);

  async function checkPayment() {
    let response = await fetch(`/api/checkout/orderStatus?id=${orderId}`);

    if (response.status != 200) {
      alert(
        'Возникла ошибка при оплате, приносим свои извенения. Свяжитесь с нами в Телеграм и мы все решим https://t.me/novms',
      );
      push(redirectTo);
    } else {
      const status = (await response.json()).status;

      if (status === OrderStatus.PENDING) {
        await checkPayment();
      }

      if (status === OrderStatus.SUCCEEDED) {
        push(redirectTo);
      }

      if (status === OrderStatus.CANCELLED) {
        alert(
          'Платеж был отклонен платежной системой, приносим свои извенения. Если по какой-то причине денежные средства были списаны, свяжитесь с нами в Телеграм и мы все решим https://t.me/novms',
        );
        push(redirectTo);
      }
    }
  }
  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center'>
        <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset] mbe-6'>
          <Typography variant='h4'>Подтверждение оплаты, пожалуйста, подождите</Typography>
        </div>
        <MainLoader />
      </div>
      {!hidden && <MaskImg alt='mask' src={miscBackground} className='w-full' />}
    </div>
  );
};

export default Payment;
