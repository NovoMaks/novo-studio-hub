// Third-party Imports
import { getServerSession } from 'next-auth';

// Type Imports
import type { ChildrenType } from '@core/types';

// Component Imports
import AuthRedirect from '@/components/AuthRedirect';
import { authOptions } from '@/lib/auth';

export default async function AuthGuard({
  children,
  disabled,
}: ChildrenType & { disabled?: boolean }) {
  const session = await getServerSession(authOptions);
  return <>{session || disabled ? children : <AuthRedirect />}</>;
}
