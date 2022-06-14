import{u as d,r as n,R as t,E as c}from"./index.53feb54a.js";var s=`## Upgrade from 1.x to 2.x

This is the content that 2.x is incompatible with version 1.x only.

## Props

| name                | description                              |
| ------------------- | ---------------------------------------- |
| editorClass         | rename to \`className\`                    |
| hljs                | removed, use \`MdEditor.config\` to config |
| highlightJs         | the same                                 |
| highlightCss        | the same                                 |
| languageUserDefined | the same                                 |
| prettier            | rename to \`noPrettier\`, default \`false\`  |
| prettierCDN         | removed, use \`MdEditor.config\` to config |
| prettierMDCDN       | the same                                 |
| cropperCss          | the same                                 |
| cropperJs           | the same                                 |
| iconfontJs          | the same                                 |
| screenfull          | the same                                 |
| screenfullJs        | the same                                 |
| mermaid             | the same                                 |
| mermaidJs           | the same                                 |
| katex               | the same                                 |
| katexJs             | the same                                 |
| katexCss            | the same                                 |
| extensions          | the same                                 |

## Component

- Catalog

  \`Editor.Catalog\` is renamed to \`Editor.MdCatalog\`.

  For more usage, refer to branch [docs](https://github.com/imzbf/md-editor-rt/tree/docs).
`,r=`## \u4ECE 1.x \u5347\u7EA7\u5230 2.x

\u4E0B\u9762\u5217\u4E3E\u7684\u662F\`2.x\`\u4E0D\u517C\u5BB9\`1.x\`\u7684\u5185\u5BB9\uFF0C\u517C\u5BB9\u5185\u5BB9\u4E0D\u4F5C\u5C55\u793A\u3002

## Props

| \u540D\u79F0                | \u8BF4\u660E                              |
| ------------------- | --------------------------------- |
| editorClass         | \u4FEE\u6539\u4E3A\`className\`                 |
| hljs                | \u5DF2\u79FB\u9664\uFF0C\u4F7F\u7528\`MdEditor.config\`\u914D\u7F6E |
| highlightJs         | \u540C\u4E0A                              |
| highlightCss        | \u540C\u4E0A                              |
| languageUserDefined | \u540C\u4E0A                              |
| prettier            | \u4FEE\u6539\u4E3A\`noPrettier\`\uFF0C\u9ED8\u8BA4\`false\`   |
| prettierCDN         | \u5DF2\u79FB\u9664\uFF0C\u4F7F\u7528\`MdEditor.config\`\u914D\u7F6E |
| prettierMDCDN       | \u540C\u4E0A                              |
| cropperCss          | \u540C\u4E0A                              |
| cropperJs           | \u540C\u4E0A                              |
| iconfontJs          | \u540C\u4E0A                              |
| screenfull          | \u540C\u4E0A                              |
| screenfullJs        | \u540C\u4E0A                              |
| mermaid             | \u540C\u4E0A                              |
| mermaidJs           | \u540C\u4E0A                              |
| katex               | \u540C\u4E0A                              |
| katexJs             | \u540C\u4E0A                              |
| katexCss            | \u540C\u4E0A                              |
| extensions          | \u540C\u4E0A                              |

## \u5185\u90E8\u7EC4\u4EF6

\u5168\u5C40\u6CE8\u518C\u540D\u79F0\u7EDF\u4E00\u4E3A\u7EC4\u4EF6\u7684\u540D\u79F0\u3002

- \u76EE\u5F55\u5BFC\u822A

  \`Editor.Catalog\`\u7EC4\u4EF6\u540D\u79F0\u4FEE\u6539\u4E3A\`Editor.MdCatalog\`\u3002

  \u66F4\u591A\u8BF7\u53C2\u8003\u4F7F\u7528[docs](https://github.com/imzbf/md-editor-rt/tree/docs)\u5206\u652F\u3002
`;const l=()=>{const e=d(m=>m),[a,o]=n.exports.useState(()=>e.lang==="zh-CN"?r:s),i=()=>{o(e.lang==="en-US"?s:r)};return n.exports.useEffect(i,[e.lang]),t.createElement("div",{className:"container"},t.createElement("div",{className:"doc"},t.createElement("div",{className:"content",style:{width:"100%"}},t.createElement(c,{theme:e.theme,codeTheme:e.codeTheme,modelValue:a,previewTheme:e.previewTheme,previewOnly:!0,showCodeRowNumber:!0}))))};export{l as default};
