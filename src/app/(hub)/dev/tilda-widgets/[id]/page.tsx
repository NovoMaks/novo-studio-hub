import prisma from '@/lib/prisma';
import 'md-editor-rt/lib/style.css';
import '@vavt/cm-extension/dist/previewTheme/arknights.css';
export default async function Page({ params }: { params: { id: string } }) {
  const postInfo = await prisma.tildaWidgetsPost.findFirst({
    select: { html: true },
    where: { urlId: params.id as string },
  });

  return (
    <div className='md-editor h-auto px-8 pb-8'>
      <div
        className='md-editor-preview'
        dangerouslySetInnerHTML={{ __html: postInfo?.html ?? '' }}
      ></div>
    </div>
  );
}
