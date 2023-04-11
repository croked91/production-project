import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import Ava from './ava.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: Ava
};
export const Small = Template.bind({});
Small.args = {
  size: 100,
  src: Ava
};
