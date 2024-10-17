'use client';

// Next Imports
import Link from 'next/link';

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';

import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';

// Third-party Imports
import classnames from 'classnames';

// Type Imports
import type { SystemMode } from '@core/types';

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant';
import MainLoader from '@/components/MainLoader';
import { useEffect, useState } from 'react';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { addUserPurchase } from '@/app/server/user';

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
  const { data: session } = useSession();
  const { push } = useRouter();

  // Hooks
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down('md'));
  const miscBackground = useImageVariant(mode, lightImg, darkImg);

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/';
  const category = searchParams.get('category') || '';
  const slug = searchParams.get('slug') || '';

  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center'>
        <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset] mbe-6'>
          <Typography
            onClick={async () => {
              await addUserPurchase({
                email: session?.user?.email ?? '',
                purchase: { category, slug },
              });
              push(redirectTo);
              ``;
            }}
            variant='h4'
          >
            Подтверждение оплаты, пожалуйста, подождите
          </Typography>
        </div>
        <MainLoader />
      </div>
      {!hidden && <MaskImg alt='mask' src={miscBackground} className='w-full' />}
    </div>
  );
};

export default Payment;
