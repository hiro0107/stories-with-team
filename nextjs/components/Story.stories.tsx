import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Story from './Story';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Story',
  component: Story,
  argTypes: {
    color: {
      type: {
        name: 'string'
      }
    }
  }
} as ComponentMeta<typeof Story>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Story> = (args) => <Story {...args} />;

export const BasicColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicColor.args = {
  text: 'あああ\nいいい\nううう\nえええ\nおおお',
};

export const Colored = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Colored.args = {
  text: 'あああ\nいいい\nううう\nえええ\nおおお',
  color: 'bg-blue-100'
};

export const Highlighted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Highlighted.args = {
  text: 'あああ\nいいい\nううう\nえええ\nおおお',
  color: 'bg-blue-100',
  highlight: true
};
