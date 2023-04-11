import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Лейбл',
  options: [
    { value: '12312', content: 'wqweqw' },
    { value: '12312', content: 'wqweqw' },
    { value: '12312', content: 'wqweqw' }
  ]
};
