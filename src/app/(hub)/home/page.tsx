import CardWithUs from '@/components/CardWithUs';
import TopContent from '@/components/TopContent';
import WelcomeCard from '@/components/WelcomeCard';
import { Grid } from '@mui/material';

export default function Page() {
  return (
    <>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <WelcomeCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TopContent />
        </Grid>
        {/* <Grid item xs={12} sm={4}>
          <CardWithUs />
        </Grid> */}
      </Grid>
    </>
  );
}
