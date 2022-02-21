import React, { useContext, useEffect, useMemo, useState } from 'react';
import Modal from '../../components/Modal';
import { prefix } from '../../config';
import { EditorContext } from '../../Editor';

interface LinkModalProp {
  type: 'link' | 'image' | 'help';
  visible: boolean;
  onCancel: () => void;
  onOk: (data?: any) => void;
}

const LinkModal = (props: LinkModalProp) => {
  const { editorId, usedLanguageText } = useContext(EditorContext);

  const title = useMemo(() => {
    switch (props.type) {
      case 'link': {
        return `${usedLanguageText.linkModalTips?.title}${usedLanguageText.toolbarTips?.link}`;
      }
      case 'image': {
        return `${usedLanguageText.linkModalTips?.title}${usedLanguageText.toolbarTips?.image}`;
      }
      default: {
        return '';
      }
    }
  }, [props.type, usedLanguageText]);

  // 链接
  const [linkData, setLinkData] = useState({
    desc: '',
    url: ''
  });

  useEffect(() => {
    if (!props.visible) {
      setTimeout(() => {
        setLinkData({
          desc: '',
          url: ''
        });
      }, 200);
    }
  }, [props.visible]);

  return (
    <Modal title={title} visible={props.visible} onClosed={props.onCancel}>
      <div className={`${prefix}-form-item`}>
        <label className={`${prefix}-lable`} htmlFor={`link-desc-${editorId}`}>
          {usedLanguageText.linkModalTips?.descLable}
        </label>
        <input
          placeholder={usedLanguageText.linkModalTips?.descLablePlaceHolder}
          className={`${prefix}-input`}
          id={`link-desc-${editorId}`}
          type="text"
          value={linkData.desc}
          onChange={(e) => {
            setLinkData({
              ...linkData,
              desc: (e.target as HTMLInputElement).value
            });
          }}
        />
      </div>
      <div className={`${prefix}-form-item`}>
        <label className={`${prefix}-lable`} htmlFor={`link-url-${editorId}`}>
          {usedLanguageText.linkModalTips?.urlLable}
        </label>
        <input
          placeholder={usedLanguageText.linkModalTips?.UrlLablePlaceHolder}
          className={`${prefix}-input`}
          id={`link-url-${editorId}`}
          type="text"
          value={linkData.url}
          onChange={(e) => {
            setLinkData({
              ...linkData,
              url: (e.target as HTMLInputElement).value
            });
          }}
        />
      </div>
      <div className={`${prefix}-form-item`}>
        <button
          className={`${prefix}-btn ${prefix}-btn-row`}
          type="button"
          onClick={() => {
            props.onOk(linkData);

            setLinkData({
              ...linkData,
              desc: '',
              url: ''
            });
          }}
        >
          {usedLanguageText.linkModalTips?.buttonOK}
        </button>
      </div>
    </Modal>
  );
};

export default LinkModal;
