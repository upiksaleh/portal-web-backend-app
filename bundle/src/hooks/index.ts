import { defineHook } from '@directus/extensions-sdk';
import newsHook from './news';
export default defineHook((fn, context) => {
  newsHook(fn, context);
});
