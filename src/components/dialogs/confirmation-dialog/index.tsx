'use client';

// React Imports
import { Fragment, useState } from 'react';

// MUI Imports
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Third-party Imports
import classnames from 'classnames';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSession } from 'next-auth/react';

type ConfirmationType =
  | 'delete-account'
  | 'unsubscribe'
  | 'suspend-account'
  | 'delete-order'
  | 'delete-customer';

type ConfirmationDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: ConfirmationType;
};

const ConfirmationDialog = ({ open, setOpen, type }: ConfirmationDialogProps) => {
  const { data: session, update: updateSession } = useSession();
  // States
  const [secondDialog, setSecondDialog] = useState(false);
  const [userInput, setUserInput] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // Vars
  const Wrapper = type === 'suspend-account' ? 'div' : Fragment;

  const handleSecondDialogClose = () => {
    setSecondDialog(false);
    setOpen(false);
  };

  const handleConfirmation = async (value: boolean) => {
    if (!!value) {
      setIsFetching(true);
      await fetch('/api/subscription/deactivate', {
        method: 'POST',
        body: JSON.stringify({
          email: session?.user?.email,
        }),
      });
      await updateSession();
    }
    setUserInput(value);
    setSecondDialog(true);
    setOpen(false);
    setIsFetching(false);
  };

  return (
    <>
      <Dialog fullWidth maxWidth='xs' open={open && !isFetching} onClose={() => setOpen(false)}>
        <DialogContent className='flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16'>
          <i className='tabler-alert-circle text-[88px] mbe-6 text-warning' />
          <Wrapper>
            <Typography variant='h4'>
              {type === 'unsubscribe' && 'Вы действительно хотите отменить подписку?'}
            </Typography>
            <Typography>
              {type === 'unsubscribe' &&
                'Ваша текущая подписка продолжит действовать до конца оплаченного периода'}
            </Typography>
          </Wrapper>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' onClick={() => handleConfirmation(true)}>
            Да
          </Button>
          <Button
            variant='tonal'
            color='secondary'
            onClick={() => {
              handleConfirmation(false);
            }}
          >
            Нет
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={secondDialog} onClose={handleSecondDialogClose}>
        <DialogContent className='flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16'>
          <i
            className={classnames('text-[88px] mbe-6', {
              'tabler-circle-check': userInput,
              'text-success': userInput,
              'tabler-circle-x': !userInput,
              'text-error': !userInput,
            })}
          />
          <Typography variant='h4' className='mbe-2'>
            {userInput
              ? `${type === 'unsubscribe' ? 'Выполнено' : 'Выполнено'}`
              : 'Действие прервано'}
          </Typography>
          <Typography color='text.primary'>
            {userInput ? (
              <>{type === 'unsubscribe' && 'Ваша подписка успешно отменена!'}</>
            ) : (
              <>{type === 'unsubscribe' && 'Вы оставили подписку активной!'}</>
            )}
          </Typography>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            Ок
          </Button>
        </DialogActions>
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

export default ConfirmationDialog;
