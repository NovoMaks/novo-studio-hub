import CardWithUs from '@/app/_components/CardWithUs';
import TopContent from '@/app/_components/TopContent';
import WelcomeCard from '@/app/_components/WelcomeCard';
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
