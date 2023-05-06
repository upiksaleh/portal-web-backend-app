import ParagraphTool from '../tools/paragraph';
import ImageTool from './image';
// import ImageTool from '../plugins/image';
import NestedListTool from '@editorjs/nested-list';
import HeaderTool from '@editorjs/header';
import CodeTool from '@editorjs/code';
import InlineCodeTool from '@editorjs/inline-code';
import MarkerTool from '@editorjs/marker';
import QuoteTool from '@editorjs/quote';
import DelimiterTool from '@editorjs/delimiter';
import TableTool from '@editorjs/table';
import AlertTool from 'editorjs-alert';
import UnderlineTool from '@editorjs/underline';
import StrikethroughTool from '@sotaproject/strikethrough';
import WarningTool from '@editorjs/warning';
import FromHtmlTool from './from-html';

export type UploaderConfig = {
  addTokenToURL: (url: string, token: string) => string;
  baseURL: string | undefined;
  setFileHandler: (handler: any) => void;
  setCurrentPreview?: (url: string) => void;
  getUploadFieldElement: () => any;
  t: Record<string, string>;
};

export default function getTools(uploaderConfig: UploaderConfig): Record<string, object> {
  const tools: Record<string, any> = {
    paragraph: {
      class: ParagraphTool,
      inlineToolbar: true,
    },
    image: {
      class: ImageTool,
      config: {
        uploader: uploaderConfig,
      },
    },
    list: {
      class: NestedListTool,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L',
    },
    header: {
      class: HeaderTool,
      shortcut: 'CMD+SHIFT+H',
      inlineToolbar: true,
    },
    code: {
      class: CodeTool,
    },
    inlinecode: {
      class: InlineCodeTool,
      shortcut: 'CMD+SHIFT+I',
    },
    marker: {
      class: MarkerTool,
      shortcut: 'CMD+SHIFT+M',
    },
    quote: {
      class: QuoteTool,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
    },
    delimiter: {
      class: DelimiterTool,
    },
    table: {
      class: TableTool,
      inlineToolbar: true,
    },
    warning: {
      class: WarningTool,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+W',
    },
    alert: {
      class: AlertTool,
    },
    underline: {
      class: UnderlineTool,
      shortcut: 'CMD+SHIFT+U',
    },
    strikethrough: {
      class: StrikethroughTool,
    },
    fromhtml: {
      class: FromHtmlTool,
    },
  };
  return tools;
}
