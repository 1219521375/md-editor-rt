import React, { useEffect, useState } from 'react';
import MdEditor from 'md-editor-rt';
import { useSelector } from 'react-redux';
import axios from '@/utils/request';
import './index.less';
import { StateType } from '@/store';
import mdEN from '../../../public/preview-en-US.md';
import mdCN from '../../../public/preview-zh-CN.md';

import EmojiExtension from '@/components/EmojiExtension';
import MarkExtension from '@/components/MarkExtension';
import ReadExtension from '@/components/ReadExtension';

const editorId = 'editor-preview';

export default () => {
  const state = useSelector((state: any) => state) as StateType;

  const [md, setMd] = useState(() => {
    return state.lang === 'zh-CN' ? mdCN : mdEN;
  });

  useEffect(() => {
    if (state.lang === 'zh-CN') {
      setMd(mdCN);
    } else {
      setMd(mdEN);
    }
  }, [state.lang]);

  return (
    <div className="project-preview">
      <div className="container">
        <MdEditor
          theme={state.theme}
          previewTheme={state.previewTheme}
          modelValue={md}
          language={state.lang}
          editorId={editorId}
          defToolbars={[
            <MarkExtension editorId={editorId} onChange={setMd} key="mark-extension" />,
            <EmojiExtension editorId={editorId} onChange={setMd} key="emoji-extension" />,
            <ReadExtension mdText={md} key="read-extension" />
          ]}
          toolbars={[
            'bold',
            'underline',
            'italic',
            'strikeThrough',
            '-',
            'title',
            'sub',
            'sup',
            'quote',
            'unorderedList',
            'orderedList',
            '-',
            'codeRow',
            'code',
            'link',
            'image',
            'table',
            'mermaid',
            'katex',
            0,
            1,
            2,
            '-',
            'revoke',
            'next',
            'save',
            '=',
            'prettier',
            'pageFullscreen',
            'fullscreen',
            'preview',
            'htmlPreview',
            'catalog',
            'github'
          ]}
          onChange={(value: string) => setMd(value)}
          onUploadImg={async (files: Array<File>, callback: (urls: string[]) => void) => {
            const res = await Promise.all(
              files.map((file) => {
                return new Promise((rev, rej) => {
                  const form = new FormData();
                  form.append('file', file);

                  axios
                    .post('/api/img/upload', form, {
                      headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                    })
                    .then((res: any) => rev(res))
                    .catch((error: any) => rej(error));
                });
              })
            );

            callback(res.map((item: any) => item.data.url));
          }}
        />
      </div>
    </div>
  );
};
