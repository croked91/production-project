import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatar from 'shared/assets/test/ava.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = args => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Егор',
    lastname: 'Тихомиров',
    age: 22,
    currency: 'USD',
    country: 'Russia',
    city: 'Уфа',
    username: 'admin',
    avatar
  }
};

export const Error = Template.bind({});
Error.args = {
  error: 'error'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
