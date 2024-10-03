import CardStudio from '@/components/CardStudio';
import CardTelegram from '@/components/CardTelegram';
import TopContent from '@/components/TopContent';
import UpcomingWebinar from '@/components/UpcomingWebinar';
import WelcomeCard from '@/components/WelcomeCard';
import { Grid } from '@mui/material';

export default function Page() {
  return (
    <>
      <Grid container spacing={10} alignItems='stretch'>
        <Grid item xs={12} sm={6}>
          <WelcomeCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardStudio />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardTelegram />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TopContent />
        </Grid>
        <Grid item xs={12} sm={6}>
          <UpcomingWebinar />
        </Grid>
      </Grid>
    </>
  );
}
