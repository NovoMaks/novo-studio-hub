import Pricing from '@/components/pricing';
import { Grid } from '@mui/material';

export default function Page() {
  return (
    <>
      <Grid container spacing={10} alignItems='stretch'>
        <Grid item xs={12}>
          <Pricing />
        </Grid>
      </Grid>
    </>
  );
}
