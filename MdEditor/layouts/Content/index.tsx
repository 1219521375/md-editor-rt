import React, { useContext, useRef, useState } from 'react';
import { prefix } from '../../config';
import { EditorContext } from '../../Editor';
import { SettingType, HeadList, MermaidTemplate, MarkedHeadingId } from '../../type';
import {
  useAutoGenrator,
  useHistory,
  useMarked,
  useAutoScroll,
  usePasteUpload,
  userZoom
} from './hooks';

export type EditorContentProp = Readonly<{
  value: string;
  // hljs?: Record<string, any>;
  // highlightSet: {
  //   js: string;
  //   css: string;
  // };
  onChange: (v: string) => void;
  setting: SettingType;
  onHtmlChanged?: (h: string) => void;
  onGetCatalog?: (list: HeadList[]) => void;
  // markedHeading: MarkedHeading;
  // mermaid实例
  // mermaid?: any;
  // mermaid script链接
  // mermaidJs: string;
  // 不使用该功能
  noMermaid?: boolean;
  sanitize: (html: string) => string;
  placeholder: string;
  // katex实例
  // katex?: any;
  // katex script链接
  // katexJs: string;
  // katexCss: string;
  noKatex?: boolean;
  // extensions?: Array<any>;
  // markedImage?: MarkedImage;
  mermaidTemplate?: MermaidTemplate;
  markedHeadingId: MarkedHeadingId;
}>;

const Content = (props: EditorContentProp) => {
  const { onChange = () => {} } = props;
  const { editorId, previewOnly, previewTheme, showCodeRowNumber } =
    useContext(EditorContext);
  // 输入状态，在输入中文等时，暂停保存
  const [completeStatus, setCS] = useState(true);

  // 输入框
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // 输入框选中的内容
  // const selectedText = useRef('');
  // 预览框
  const previewRef = useRef<HTMLDivElement>(null);
  // html代码预览框
  const htmlRef = useRef<HTMLDivElement>(null);

  const { html } = useMarked(props);
  useAutoScroll(props, html, textAreaRef, previewRef, htmlRef);
  useHistory(props, textAreaRef, completeStatus);
  useAutoGenrator(props, textAreaRef);
  usePasteUpload(textAreaRef);
  userZoom(html);

  return (
    <>
      <div className={`${prefix}-content`}>
        {!previewOnly && (
          <div className={`${prefix}-input-wrapper`}>
            <textarea
              id={`${editorId}-textarea`}
              ref={textAreaRef}
              value={props.value}
              onCompositionStart={() => {
                setCS(false);
              }}
              onInput={(e) => {
                // 先清空保存的选中内容，防止异常现象
                // selectedText.current = '';

                // 触发更新
                onChange((e.target as HTMLTextAreaElement).value);
              }}
              onCompositionEnd={() => {
                // 输入中文等时，oninput不会保存历史记录
                // 在完成时保存
                // bus.emit(
                //   editorId,
                //   'saveHistory',
                //   (e.target as HTMLTextAreaElement).value
                // );
                setCS(true);
              }}
              className={
                props.setting.preview || props.setting.htmlPreview ? '' : 'textarea-only'
              }
              placeholder={props.placeholder}
            />
          </div>
        )}
        {props.setting.preview && (
          <div
            id={`${editorId}-preview-wrapper`}
            className={`${prefix}-preview-wrapper`}
            ref={previewRef}
            key="content-preview-wrapper"
          >
            <div
              id={`${editorId}-preview`}
              className={[
                `${prefix}-preview`,
                `${previewTheme}-theme`,
                showCodeRowNumber && `${prefix}-scrn`
              ]
                .filter((c) => !!c)
                .join(' ')}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        )}
        {props.setting.htmlPreview && (
          <div
            className={`${prefix}-preview-wrapper`}
            ref={htmlRef}
            key="html-preview-wrapper"
          >
            <div className={`${prefix}-html`}>{html}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
