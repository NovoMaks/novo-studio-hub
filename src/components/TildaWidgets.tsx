// MUI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';
import WidgetHelpCards from './WidgetHelpCards';

const TildaWidgets = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={6} gridAutoRows={1}>
          <Grid item sm={12}>
            <div className='flex flex-col items-center justify-center gap-y-4 bs-full text-center w-full'>
              <CustomAvatar variant='rounded' skin='light' color='primary' size={52}>
                <i className='tabler-tilde text-4xl' />
              </CustomAvatar>
              <Typography variant='h4'>Тильда виджеты</Typography>
              <Typography>
                Улучшите свой сайт тильда, с нашими готовымы блоками или закажите свой
              </Typography>
              <Button variant='contained' href='/tilda-widgets'>
                Смотреть виджеты
              </Button>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TildaWidgets;
