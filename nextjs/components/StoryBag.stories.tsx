import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StoryBag from './StoryBag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'StoryBag',
  component: StoryBag,
} as ComponentMeta<typeof StoryBag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StoryBag> = (args) => <StoryBag {...args} />;

export const BasicColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicColor.args = {
  texts: ['あああ', 'いいい', 'ううう', 'えええ', 'おおお']
};

export const Colored = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Colored.args = {
  texts: ['あああ', 'いいい', 'ううう', 'えええ', 'おおお'],
  color: 'bg-blue-100'
};
