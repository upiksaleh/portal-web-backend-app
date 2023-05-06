import RawTool from '@editorjs/raw';
import { IconHtml } from '@codexteam/icons';
export default class ParagraphTool extends RawTool {
  static get toolbox() {
    return {
      title: 'From Html',
      icon: IconHtml,
    };
  }
}
