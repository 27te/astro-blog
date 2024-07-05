import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  content: {
    collections: {
      blog: {
        schema: {
          type: 'post',
          frontmatter: {
            title: { type: 'string' },
            date: { type: 'date' },
          },
        },
      },
    },
  },
});
