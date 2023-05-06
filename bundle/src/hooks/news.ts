import { defineHook } from '@directus/extensions-sdk';
import { generateSlugByCollection } from '../utils';

type NewsInput = {
  title: string;
  slug?: string;
};

export default defineHook((fn, context) => {
  const { filter } = fn;

  filter('news.items.create', async (_input, { collection }, { database }) => {
    const input: NewsInput = _input as NewsInput;
    input.slug = await generateSlugByCollection({ database, collection, text: input.slug ?? input.title });
    return input;
  });
});
