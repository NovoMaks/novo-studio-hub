import Post from '@/components/Post';
import WidgetHelpCards from '@/components/WidgetHelpCards';
import AuthGuard from '@/hocs/AuthGuard';
import BuyPostGuard from '@/hocs/BuyPostGuard';
import { getPostContent } from '@/lib/posts';
import { Divider } from '@mui/material';
import { redirect } from 'next/navigation';

export const dynamic = 'force-static';
export default async function Page({ params }: { params: { id: string } }) {
  const postInfo = await getPostContent({ category: 'tilda-widgets', slug: params.id });

  if (!postInfo) return redirect('/not-found');

  return (
    <AuthGuard disabled={!postInfo.price}>
      <BuyPostGuard post={postInfo}>
        <Post content={postInfo.content} />
        <Divider className='my-9' />
        <WidgetHelpCards />
      </BuyPostGuard>
    </AuthGuard>
  );
}
