// Third-party Imports
import { getServerSession } from 'next-auth';

// Type Imports
import type { ChildrenType } from '@core/types';

// Component Imports
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function SubscriptionGuard({
  children,
  disabled,
}: ChildrenType & { disabled: boolean }) {
  const session = await getServerSession(authOptions);
  return (
    <>
      {(session?.user &&
        (session.subscription?.type === 'STANDARD' || session.subscription?.type === 'PRO')) ||
      disabled
        ? children
        : redirect('/profile/plan')}
    </>
  );
}
