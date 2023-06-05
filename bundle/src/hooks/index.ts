import { defineHook } from '@directus/extensions-sdk';
import newsHook from './news';
import websitesHook from './websites';
export default defineHook((fn, context) => {
  newsHook(fn, context);
  websitesHook(fn, context);
});
