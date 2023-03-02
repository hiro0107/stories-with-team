import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} >
  <div>aaaa</div><div>bbbb</div><div>cccc</div>
  <div>aaaa</div><div>bbbb</div><div>cccc</div>
  <div>aaaa</div><div>bbbb</div><div>cccc</div>
  <div>aaaa</div><div>bbbb</div><div>cccc</div>
</Sidebar>;

export const Left = Template.bind({});
Left.args = {
  position: 'left',
  addtionalStyles: 'w-[100px] bg-red-100 drop-shadow-lg z-100'
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
  addtionalStyles: 'w-[100px] bg-red-100 drop-shadow-lg z-100'
};

