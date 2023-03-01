import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Foo } from './Foo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foo',
  component: Foo,
} as ComponentMeta<typeof Foo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Foo> = (args) => <Foo />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
