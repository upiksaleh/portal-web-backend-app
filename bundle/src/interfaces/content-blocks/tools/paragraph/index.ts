// import { BaseTool } from '@editorjs/editorjs';
import ParagraphToolBase from 'editorjs-paragraph-with-alignment';
import { IconText } from '@codexteam/icons';
export default class ParagraphTool extends ParagraphToolBase {
  static get toolbox() {
    return {
      title: 'Text',
      icon: IconText,
    };
  }
}
