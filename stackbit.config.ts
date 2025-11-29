import { defineStackbitConfig, GitContentSource } from '@stackbit/types';

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/{slug}',
          filePath: 'content/pages/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string' },
            { name: 'content', type: 'rich-text' }
          ]
        }
      ],
      siteMapFunction: async (doc) => {
        if (doc.model.type === 'page') {
          return `/${doc.slug}`;
        }
        return null;
      }
    })
  ]
});
