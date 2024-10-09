'use client';

// React Imports
import { useState } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

// Component Imports
import DialogCloseButton from '../DialogCloseButton';
import CustomTextField from '@core/components/mui/TextField';
import { PrismaSchemas } from '@/types/post';
import { LoadingButton } from '@mui/lab';
import prisma from '@/lib/prisma';

type SavePostProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data?: string;
};

const locations: { name: string; prismaSchema: PrismaSchemas }[] = [
  { name: 'Разработка/Тильда-виджеты', prismaSchema: PrismaSchemas.tildaWidgetsPost },
];

const SavePost = ({ open, setOpen, data }: SavePostProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [isFetching, setIsFetching] = useState(false);

  const [urlId, setUrlId] = useState('');
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [prismaSchema, setPrismaSchema] = useState<PrismaSchemas | ''>('');
  const [isFree, setIsFree] = useState(false);

  const onSavePost = async () => {
    if (!urlId || !title || !imgUrl || !description || !prismaSchema || !data) {
      alert('Заполните все поля');
      return;
    }
    setIsFetching(true);
    await fetch('/api/post/new', {
      method: 'POST',
      body: JSON.stringify({
        urlId,
        title,
        imgUrl,
        description,
        prismaSchema,
        html: data,
        isFree,
      }),
    });
    setIsFetching(false);
    alert('Пост создан');
    handleClose();
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      maxWidth='md'
      scroll='body'
      sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
    >
      <DialogCloseButton onClick={() => setOpen(false)} disableRipple>
        <i className='tabler-x' />
      </DialogCloseButton>
      <DialogTitle
        variant='h4'
        className='flex gap-2 flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        Создание поста
      </DialogTitle>
      <form onSubmit={(e) => e.preventDefault()}>
        <DialogContent className='overflow-visible pbs-0 sm:pli-16'>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                label='Название'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                multiline
                fullWidth
                label='Описание'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                fullWidth
                label='URL id'
                value={urlId}
                onChange={(e) => setUrlId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                fullWidth
                label='URL обложки'
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                select
                fullWidth
                label='Место публикации'
                value={prismaSchema}
                onChange={(e) => setPrismaSchema(e.target.value as unknown as PrismaSchemas)}
              >
                {locations.map((location, index) => (
                  <MenuItem key={index} value={location.prismaSchema}>
                    {location.name}
                  </MenuItem>
                ))}
              </CustomTextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch defaultChecked={false} />}
                label='Бесплатный'
                value={isFree}
                onChange={(e, checked) => setIsFree(checked)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 sm:pbe-16 sm:pli-16'>
          <LoadingButton
            variant='contained'
            loading={isFetching}
            onClick={onSavePost}
            type='submit'
          >
            Сохранить
          </LoadingButton>
          <Button variant='tonal' color='secondary' type='reset' onClick={handleClose}>
            Отменить
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SavePost;
