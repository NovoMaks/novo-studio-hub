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
  // States
  const [secondDialog, setSecondDialog] = useState(false);
  const [userInput, setUserInput] = useState(false);

  // Vars
  const Wrapper = type === 'suspend-account' ? 'div' : Fragment;

  const handleSecondDialogClose = () => {
    setSecondDialog(false);
    setOpen(false);
  };

  const handleConfirmation = (value: boolean) => {
    setUserInput(value);
    setSecondDialog(true);
    setOpen(false);
  };

  return (
    <>
      <Dialog fullWidth maxWidth='xs' open={open} onClose={() => setOpen(false)}>
        <DialogContent className='flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16'>
          <i className='tabler-alert-circle text-[88px] mbe-6 text-warning' />
          <Wrapper
            {...(type === 'suspend-account' && {
              className: 'flex flex-col items-center gap-2',
            })}
          >
            <Typography variant='h4'>
              {type === 'delete-account' && 'Вы действительно хотите удалить ваш аккаунт?'}
              {type === 'unsubscribe' && 'Вы действительно хотите отменить подписку?'}
              {type === 'suspend-account' && 'Вы уверены?'}
              {type === 'delete-order' && 'Вы уверены?'}
              {type === 'delete-customer' && 'Вы уверены?'}
            </Typography>
          </Wrapper>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' onClick={() => handleConfirmation(true)}>
            {type === 'suspend-account'
              ? 'Да!'
              : type === 'delete-order'
                ? 'Да!'
                : type === 'delete-customer'
                  ? 'Да!'
                  : 'Да'}
          </Button>
          <Button
            variant='tonal'
            color='secondary'
            onClick={() => {
              handleConfirmation(false);
            }}
          >
            Отменить
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
              ? `${type === 'delete-account' ? 'Аккаунт удален' : type === 'unsubscribe' ? 'Подписка отменена' : type === 'delete-order' || 'delete-customer' ? 'Удалено' : 'Приостановлено!'}`
              : 'Действие прервано'}
          </Typography>
          <Typography color='text.primary'>
            {userInput ? (
              <>
                {type === 'delete-account' && 'Успешно!'}
                {type === 'unsubscribe' && 'Ваша подписка успешно отменена!'}
                {type === 'suspend-account' && 'Успешно!'}
                {type === 'delete-order' && 'Успешно!'}
                {type === 'delete-customer' && 'Успешно!'}
              </>
            ) : (
              <>
                {type === 'delete-account' && 'Отменено!'}
                {type === 'unsubscribe' && 'Вы оставили подписку активной!'}
                {type === 'suspend-account' && 'Отменено'}
                {type === 'delete-order' && 'Отменено'}
                {type === 'delete-customer' && 'Отменено'}
              </>
            )}
          </Typography>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            Ок
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmationDialog;
