import Post from '@/components/Post';
import SubscriptionGuard from '@/hocs/SubscriptionGuard';
import { getPostContent } from '@/lib/posts';
export default async function Page({ params }: { params: { id: string } }) {
  const postInfo = await getPostContent({ category: 'tilda-widgets', slug: params.id });

  return (
    <SubscriptionGuard disabled={!!postInfo?.isFree}>
      <Post content={postInfo?.content ?? ''} />
    </SubscriptionGuard>
  );
}
