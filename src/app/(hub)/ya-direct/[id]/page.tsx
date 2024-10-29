import Post from '@/components/Post';
import AuthGuard from '@/hocs/AuthGuard';
import BuyPostGuard from '@/hocs/BuyPostGuard';
import { getPostContent } from '@/lib/posts';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const postInfo = await getPostContent({ category: 'ya-direct', slug: params.id });

  if (!postInfo) return redirect('/not-found');

  return (
    <AuthGuard disabled={!postInfo.price}>
      <BuyPostGuard post={postInfo}>
        <Post postInfo={postInfo} />
      </BuyPostGuard>
    </AuthGuard>
  );
}
