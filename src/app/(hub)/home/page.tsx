import CardStudio from '@/components/CardStudio';
import CardTelegram from '@/components/CardTelegram';
import ServicesCards from '@/components/ServicesCards';
import TopContent from '@/components/TopContent';
import UpcomingWebinar from '@/components/UpcomingWebinar';
import WelcomeCard from '@/components/WelcomeCard';
import { Grid } from '@mui/material';

export default function Page() {
  return (
    <>
      <Grid container spacing={6} alignItems='stretch'>
        <Grid item xs={12} md={6}>
          <WelcomeCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardStudio />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardTelegram />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopContent />
        </Grid>
        <Grid item xs={12} md={6}>
          <UpcomingWebinar />
        </Grid>
        <Grid item md={12}>
          <ServicesCards />
        </Grid>
      </Grid>
    </>
  );
}
