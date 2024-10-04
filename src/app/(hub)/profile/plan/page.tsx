import CurrentPlan from '@/components/CurrentPlan';
import AuthGuard from '@/hocs/AuthGuard';
import { Grid } from '@mui/material';

export default function Page() {
  return (
    <AuthGuard>
      <Grid container spacing={10} alignItems='stretch'>
        <Grid item xs={12}>
          <CurrentPlan />
        </Grid>
      </Grid>
    </AuthGuard>
  );
}
