import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StoryBoard from './StoryBoard';

export default {
  title: 'StoryBoard',
  component: StoryBoard
} as ComponentMeta<typeof StoryBoard>;

const Template: ComponentStory<typeof StoryBoard> = (args) => <StoryBoard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  board: [{
    user_story: { text: 'あああ'},
    activities: [
      { text: 'いいい'}, { text: 'ううう'}, { text: 'えええ'}, { text: 'おおお'}
    ]
  }, {
    user_story: { text: 'かかか'},
    activities: [
      { text: 'ききき'}, { text: 'くくく'}, { text: 'けけけ'}
    ]
  }]
};
