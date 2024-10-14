'use client';
import { useEffect, useRef, useState } from 'react';
import { ExposeParam, MdEditor, config } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import RU from '@vavt/cm-extension/dist/locale/ru';
import '@vavt/cm-extension/dist/previewTheme/arknights.css';

import { useColorScheme, useMediaQuery, useTheme } from '@mui/material';
import { SystemMode } from '@/@core/types';
config({
  editorConfig: {
    languageUserDefined: {
      'ru': RU,
    },
  },
});

function MarkdownEditor({ serverMode }: { serverMode: SystemMode }) {
  const { mode } = useColorScheme();
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode;

  const editorRef = useRef<ExposeParam>(null);
  const theme = useTheme();
  const hiddenPreview = useMediaQuery(theme.breakpoints.down('md'));
  const [text, setText] = useState(localStorage.getItem('mdeditor') ?? '# Novo-studio');

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
        toolbarsExclude={['mermaid', 'katex', 'github']}
        noUploadImg
        preview={!hiddenPreview}
        language='ru'
        theme={_mode}
        modelValue={text}
        onChange={setText}
      />
    </>
  );
}

export default MarkdownEditor;
