'use client';

// React Imports
import { useState } from 'react';

// Next Imports
import { useRouter } from 'next/navigation';

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// Third-party Imports
import classnames from 'classnames';

// Type Imports
import type { SystemMode } from '@core/types';

// Component Imports
import Link from '@components/Link';
import Logo from '@components/layout/shared/Logo';

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant';
import { useSettings } from '@core/hooks/useSettings';
import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';

// Styled Custom Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 680,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550,
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450,
  },
}));

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1,
});

const LoginV2 = ({ mode }: { mode: SystemMode }) => {
  // Vars
  const darkImg = '/images/pages/auth-mask-dark.png';
  const lightImg = '/images/pages/auth-mask-light.png';
  const logoForDark = '/images/pages/logo-main.svg';
  const logoForLight = '/images/pages/logo-black.svg';

  // Hooks
  const router = useRouter();
  const { settings } = useSettings();
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down('md'));
  const authBackground = useImageVariant(mode, lightImg, darkImg);

  const characterIllustration = useImageVariant(mode, logoForLight, logoForDark);

  return (
    <div className='flex bs-full justify-center'>
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered',
          },
        )}
      >
        <LoginIllustration src={characterIllustration} alt='character-illustration' />
        {!hidden && (
          <MaskImg
            alt='mask'
            src={authBackground}
            className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
          />
        )}
      </div>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <Link
          href='/'
          className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'
        >
          <Logo />
        </Link>
        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-11 sm:mbs-14 md:mbs-0'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>{`Novo-studio HUB 👋🏻`}</Typography>
            <Typography>Войти через:</Typography>
          </div>
          <form
            noValidate
            autoComplete='off'
            onSubmit={(e) => {
              e.preventDefault();
              router.push('/');
            }}
            className='flex flex-col gap-5'
          >
            <div className='flex flex-col gap-1.5'>
              <Button
                variant='contained'
                onClick={() => signIn('yandex', { callbackUrl: '/home' })}
                startIcon={<i className='tabler-brand-yandex text-[#ffdb4d]' />}
                className='font-bold'
              >
                Yandex
              </Button>
              <Button
                variant='contained'
                onClick={() => signIn('mailru', { callbackUrl: '/home' })}
                startIcon={<i className='tabler-at text-blue-300' />}
                className='font-bold'
              >
                Mail.ru
              </Button>
              <Button
                startIcon={<i className='tabler-brand-google text-red-300' />}
                variant='contained'
                onClick={() => signIn('google', { callbackUrl: '/home' })}
                className=' font-bold'
              >
                Google
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginV2;
