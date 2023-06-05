// @ts-nocheck

import ImageTool from '@editorjs/image';
import Uploader from '../custom-plugins/editorjs-uploader.js';
/**
 * Patch allows custom uploader.
 * https://github.com/editor-js/image/blob/master/src/index.js
 */
export default class extends ImageTool {
  constructor(params) {
    super(params);
    this.uploader = new Uploader({
      config: this.config,
      getCurrentFile: () => this.data?.file?.url,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error),
    });
  }
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [{}],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {},

      /**
       * Drag n drop file from into the Editor
       */
      files: {},
    };
  }
  set caption(file) {
    console.log('ffff', file);
  }
  set image(file) {
    this._data.file = file || {};
    if (file && file.url) {
      const imageUrl = this.config.uploader.addTokenToURL(file.url) + '&key=system-large-contain';
      this.ui.fillImage(file.url);
    }
  }
}