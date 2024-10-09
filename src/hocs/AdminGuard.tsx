// Third-party Imports
import { getServerSession } from 'next-auth';

// Type Imports
import type { ChildrenType } from '@core/types';

// Component Imports
import AuthRedirect from '@/components/AuthRedirect';

export default async function AdminGuard({ children }: ChildrenType) {
  const session = await getServerSession();
  const admins = ['nov.ms@bk.ru', 'no.ms@ya.ru'];
  return <>{session?.user && admins.includes(session.user.email) ? children : <AuthRedirect />}</>;
}
