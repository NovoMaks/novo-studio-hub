'use client';

// Next Imports
import Link from 'next/link';

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Type Imports
import type { SystemMode } from '@core/types';

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant';

// Styled Components
const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1,
});

const SubscriptionResult = ({ mode }: { mode: SystemMode }) => {
  // Vars
  const darkImg = '/images/pages/misc-mask-dark.png';
  const lightImg = '/images/pages/misc-mask-light.png';

  // Hooks
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down('md'));
  const miscBackground = useImageVariant(mode, lightImg, darkImg);

  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center'>
        <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset] mbe-6'>
          <Typography className={`font-medium md:text-8xl text-4xl`} color='text.primary'>
            Поздравляем!
          </Typography>
          <Typography variant='h4'>Подписка оформлена успешно</Typography>
          <Typography>
            Совсем скоро информация о вашей подписке обновится (обычно это занимает до 5 минут)
          </Typography>
        </div>
        <Button href='/' component={Link} variant='contained'>
          Вернуться на главную
        </Button>
        <img
          alt='Подписка оформлена'
          src='/images/pages/cubes.png'
          className='object-cover bs-[400px] md:bs-[450px] lg:bs-[500px] mbs-10 md:mbs-14 lg:mbs-20'
        />
      </div>
      {!hidden && <MaskImg alt='mask' src={miscBackground} className='w-full' />}
    </div>
  );
};

export default SubscriptionResult;
