// Type Imports
import type { ChildrenType } from '@core/types';

import { Post } from '@/types/post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { newOrder } from '@/app/server/order';

export default async function BuyPostGuard({ children, post }: ChildrenType & { post: Post }) {
  const session = await getServerSession(authOptions);

  if (
    (session?.user &&
      session.user.purchases?.find((p) => p.category === post.category && p.slug === post.slug)) ||
    !post.price
  ) {
    return <>{children}</>;
  } else {
    await newOrder({
      userEmail: session?.user?.email ?? '',
      totalAmount: +post.price,
      category: post.category,
      slug: post.slug,
      redirectTo: `/${post.category}/${post.slug}`,
    });
  }
}
