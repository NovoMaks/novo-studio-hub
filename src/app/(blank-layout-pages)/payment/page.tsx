// Next Imports
import type { Metadata } from 'next';

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers';
import Payment from '@/views/Payment';

export const metadata: Metadata = {
  title: 'Покупка',
  description: 'Подтверждение покупки',
};

const Page = () => {
  // Vars
  const mode = getServerMode();

  return <Payment mode={mode} />;
};

export default Page;
