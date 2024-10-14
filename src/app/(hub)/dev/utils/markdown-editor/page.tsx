// Next Imports
import type { Metadata } from 'next';

// Server Action Imports
import MarkdownEditor from '@/components/MarkdownEditor';
import { getServerMode } from '@/@core/utils/serverHelpers';

export const metadata: Metadata = {
  title: 'Markdown редактор',
  description: '',
};

const Page = () => {
  const serverMode = getServerMode();
  return <MarkdownEditor serverMode={serverMode} />;
};

export default Page;
