import CardStudio from '@/components/CardStudio';
import CardTelegram from '@/components/CardTelegram';
import MainLoader from '@/components/MainLoader';
import ServicesCards from '@/components/ServicesCards';
import TildaWidgets from '@/components/TildaWidgets';
import WelcomeCard from '@/components/WelcomeCard';
import YaDirect from '@/components/YaDirect';
import { Grid } from '@mui/material';
import { Suspense } from 'react';

export default function Page() {
  return (
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
      <Grid item xs={6}>
        <TildaWidgets />
      </Grid>
      <Grid item xs={6}>
        <YaDirect />
      </Grid>
      {/* <Grid item xs={12} md={6}>
          <TopContent />
        </Grid>
        <Grid item xs={12} md={6}>
          <UpcomingWebinar />
        </Grid> */}
      <Grid item md={12}>
        <ServicesCards />
      </Grid>
    </Grid>
  );
}
