import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import Icon from './Icon.vue';

const DefaultArgs = {
  name: {
    control: {
      type: 'text',
    },
    defaultValue: 'face',
  },
  size: {
    control: {
      type: 'text',
    },
    defaultValue: '24',
  },
  color: {
    control: {
      type: 'color',
    },
    defaultValue: '',
  },
  kind: {
    control: {
      type: 'radio',
      options: ['filled', 'round', 'outlined', 'sharp', 'two-tone'],
    },
    defaultValue: 'round',
    table: {
      defaultValue: {
        summary: 'filled',
        detail: 'filled | round | outlined | sharp | two-tone',
      },
    },
    description: 'Kinds of icon',
  },
  fontWeight: {
    control: {
      type: 'radio',
      options: ['light', 'bold'],
    },
    defaultValue: 'light',
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const IconStory = {
  title: 'Components/Icon',
  component: Icon,
  setup: (args: typeof Icon) => ({
    args,
    onClick: action('click'),
  }),
  template: `<Icon v-bind="args" @click="onClick"/>`,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: [],
  argTypes: {
    ...DefaultArgs,
  },
} as Meta<typeof Icon>;

export default IconStory;

type Story = StoryObj<typeof IconStory>;

/**
 * <a id="overview"></a>
 * The Icon component is a graphical element that is used to visually represent an idea, concept, or action. It is typically used in conjunction with text or other graphical elements to provide a clear and concise way of conveying information to the user. It is highly customizable, allowing the developer to control the size, color, and style of the icon to match the design of the application.
 * <br><br>The Icon component is a versatile and useful tool for adding visual emphasis and clarity to an application's user interface. It is important to use icons consistently and thoughtfully in order to create a cohesive and intuitive user experience.
 * <br><br>To access a comprehensive list of icons available in our design system, please refer to the icon list page by clicking [the following link](https://fonts.google.com/icons?icon.set=Material+Icons\&icon.style=Rounded).
 */
export const Overview: Story = {
  args: {
    name: 'face',
  },
};

/**
 * ## Usage with props <a id="usage" />

### name (required)

The name prop is a string that specifies the name of the icon you want to display. The list of available icons and their names can be found in the design system's icon library.

### kind (optional)

The kind prop specifies the style of the icon. It can be one of the following values:

- **filled**: the icon is filled with a solid color
- **round**: the icon is rounded and filled with a solid color
- **outlined**: the icon is outlined and not filled with a color
- **sharp**: the icon is not rounded and filled with a solid color
- **two-toned**: the icon is filled with two colors, typically a primary color and a secondary color

If the kind prop is not provided, the default value is round.

### size (optional)

The size prop is a number that specifies the size of the icon in pixels. If the size prop is not provided, the default size is 24 pixels.

### color (optional)

The color prop is a string that specifies the color of the icon. It can be any valid CSS color value, such as a hex code, a RGB value, or a color name. If the color prop is not provided, the default color is black.

### font-weight (optional)

The font-weight prop specifies the weight of the icon's font. It can be one of the following values:

- **light**: the font weight is lighter than the default font weight
- **bold**: the font weight is bolder than the default font weight

If the font-weight prop is not provided, the default value is light.
*/

/** 
 * 
 * # Stories <a id="stories" />

### Default
*/

export const DefaultIcon: Story = {
  args: {
    name: 'home',
  },
};

/** 
### Tips <a id="tips" />

💡 Choose a set of icons that are visually consistent and easy to understand. This will help create a cohesive look and feel for your application.

💡 Icons should be used to supplement text, not replace it. Text is still the most effective way to convey information, so make sure to use icons in conjunction with clear, concise text labels.

💡 Make sure to choose an icon that accurately represents the action or concept it is being used to represent. Using the wrong icon can lead to confusion for the user.

💡 Choose colors and sizes for your icons that are consistent with the overall design of your application. Large, bright icons may be attention-grabbing, but they can also be overwhelming if used too frequently.

💡 Make sure to consider accessibility when using icons. Use appropriate alt text for your icons, and consider providing additional information for users who may be unable to see the icons.

*/
