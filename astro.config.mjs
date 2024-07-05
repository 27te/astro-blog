import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [mdx()],
  content: {
    collections: {
      blog: {
        schema: {
          type: 'post',
          frontmatter: {
            title: {
              type: 'string',
            },
            date: {
              type: 'date',
            },
          },
        },
      },
    },
  },
  adapter: netlify(),
});
