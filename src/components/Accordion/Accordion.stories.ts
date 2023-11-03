import type { Meta, StoryObj } from '@storybook/vue3'
import Accordion from './RAccordion.vue'

const DefaultArgs = {
  accordions: [
    {
      title: 'Accordion 1',
      content: 'Accordion 1 content',
    },
  ],
}

const AccordionStory = {
  title: 'Components/Accordion',
  component: Accordion,
  setup: (args: typeof Accordion) => {
    return { args }
  },
  template: '<Accordion v-bind="args" @update="update"/>',
  args: DefaultArgs,
} as Meta<typeof Accordion>

export default AccordionStory

type Story = StoryObj<typeof AccordionStory>

export const Overview: Story = {
  args: {
    accordions: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
      },
    ],
  },
}

export const SingleCollapse: Story = {
  args: {
    accordions: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
      },
    ],
  },
}

export const Accordion1: Story = {
  args: {
    accordions: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
        open: true,
      },
      {
        title: 'Accordion 2',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio`,
      },
      {
        title: 'Lorem ipsum',
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        `,
      },
      {
        title: 'Lorem ipsum over 600px',
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla nec purus feugiat, molestie ipsum et, consequat nibh. 
        Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
        Fusce euismod magna et sapien varius, ut ultricies enim scelerisque. 
        Fusce ultrices euismod lobortis. Nullam faucibus aliquet feugiat. 
        Curabitur ut augue finibus, luctus tortor at, ornare erat. 
        Donec auctor ipsum ut tellus ultrices, vel tincidunt ipsum posuere. 
        Nullam euismod, lorem vitae aliquam facilisis, elit nunc aliquet nunc, 
        ut tristique massa nisl nec elit. 
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero, 
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut 
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        aliquam mauris, quis ultrices nisl velit quis nunc. Nulla facilisi. Nulla 
        facilisi.
        
        Donec euismod, mauris ut ultricies ultrices, nunc ipsum aliquam libero,
        vitae venenatis eros eros vel arcu. Donec ut porta libero. Sed ut erat ut
        nunc fermentum aliquam. Donec auctor, eros eget ultrices mollis, ipsum odio
        `,
      },
      {
        title: 'Accordion 4',
        content: 'Accordion 4 content',
        disabled: true,
      },
    ],
  },
}
