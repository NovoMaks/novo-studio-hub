'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <div className='hidden'></div>;
}
