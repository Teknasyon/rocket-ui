import { addons } from '@storybook/addons'
import { transformSource } from '../withSource.js'
import { createElement as h } from 'react'
import { SyntaxHighlighter } from '@storybook/components'

addons.register('source-code', (api) => {
  addons.addPanel('source-code/panel', {
    title: 'Source Code',
    render: ({ active, key }) => {
      if (!active) return null;

      const story = api.getCurrentStoryData();
      try {
        const code = transformSource(story.parameters.storySource.source, story);
        return h(SyntaxHighlighter, {
          key,
          padded: true,
          language: 'html',
          copyable: true,
        }, code);
      } catch (e) {
        console.warn('Failed to render code', e);
        return null;
      }
    },
    paramKey: 'source',
  })
})
