// Next Imports
import type { Metadata } from 'next';

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers';
import SubscriptionResult from '@/views/SubscriptionResult';

export const metadata: Metadata = {
  title: 'Подписка',
  description: 'Подписка успешно оформлена',
};

const Page = () => {
  // Vars
  const mode = getServerMode();

  return <SubscriptionResult mode={mode} />;
};

export default Page;
