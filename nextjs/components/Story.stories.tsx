import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Story } from './Story';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Story',
  component: Story,
} as ComponentMeta<typeof Story>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Story> = (args) => <Story {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  text: 'あああ\nいいい\nううう\nえええ\nおおお',
};
