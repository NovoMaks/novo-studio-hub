// Next Imports
import type { Metadata } from 'next';

// Server Action Imports
import MarkdownEditor from '@/components/MarkdownEditor';
import { getServerMode } from '@/@core/utils/serverHelpers';

export const metadata: Metadata = {
  title: 'Пост',
  description: 'Форма для создания поста',
};

const Page = () => {
  const serverMode = getServerMode();
  return <MarkdownEditor serverMode={serverMode} />;
};

export default Page;
