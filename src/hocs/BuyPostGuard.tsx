// Third-party Imports
import { getServerSession } from 'next-auth';

// Type Imports
import type { ChildrenType } from '@core/types';

// Component Imports
import { authOptions } from '@/lib/auth';
import { Post } from '@/types/post';
import BuyPostRedirect from '@/components/BuyPostRedirect';

export default async function BuyPostGuard({ children, post }: ChildrenType & { post: Post }) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {(session?.user &&
        session.user.purchases?.find(
          (p) => p.category === post.category && p.slug === post.slug,
        )) ||
      !post.price ? (
        children
      ) : (
        <BuyPostRedirect url={`/payment?category=${post.category}&slug=${post.slug}`} />
      )}
    </>
  );
}
