'use client';
import { useEffect, useRef, useState } from 'react';
import { ExposeParam, MdEditor, ToolbarNames, config } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import RU from '@vavt/cm-extension/dist/locale/ru';
import '@vavt/cm-extension/dist/previewTheme/arknights.css';

import { useColorScheme, useMediaQuery, useTheme } from '@mui/material';
import { SystemMode } from '@/@core/types';
import { useSession } from 'next-auth/react';
import SavePost from './dialogs/save-post';

config({
  editorConfig: {
    languageUserDefined: {
      'ru': RU,
    },
  },
});

function MarkdownEditor({ serverMode }: { serverMode: SystemMode }) {
  const { mode } = useColorScheme();
  const { data: session } = useSession();
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode;

  const editorRef = useRef<ExposeParam>(null);
  const theme = useTheme();
  const hiddenPreview = useMediaQuery(theme.breakpoints.down('md'));
  const [text, setText] = useState(localStorage.getItem('mdeditor') ?? '# Novo-studio');

  const [openSavePost, setOpenSavePost] = useState(false);
  const [htmlText, setHtmlText] = useState('');

  const onSave = async (_: string, html: Promise<string>) => {
    if (session?.user?.role === 'ADMIN') {
      const newHtmlText = await html;
      setHtmlText(newHtmlText);
      setOpenSavePost(true);
    }
  };

  useEffect(() => {
    localStorage.setItem('mdeditor', text);
  }, [text]);

  useEffect(() => {
    if (!!editorRef) {
      editorRef?.current?.togglePreview(!hiddenPreview);
    }
  }, [hiddenPreview]);

  return (
    <>
      <MdEditor
        className='h-full'
        ref={editorRef}
        toolbarsExclude={[
          'mermaid',
          'katex',
          'github',
          ...(session?.user?.role === 'ADMIN' ? [] : (['save'] as ToolbarNames[])),
        ]}
        onSave={onSave}
        noUploadImg
        preview={!hiddenPreview}
        language='ru'
        theme={_mode}
        modelValue={text}
        onChange={setText}
      />
      <SavePost open={openSavePost} setOpen={setOpenSavePost} data={htmlText} />
    </>
  );
}

export default MarkdownEditor;
