import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import avatar from 'shared/assets/test/ava.jpg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = args => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'Егор',
      lastname: 'Тихомиров',
      age: 22,
      currency: 'USD',
      country: 'Russia',
      city: 'Уфа',
      username: 'admin',
      avatar
    }
  }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'Егор',
      lastname: 'Тихомиров',
      age: 22,
      currency: 'USD',
      country: 'Russia',
      city: 'Уфа',
      username: 'admin',
      avatar
    }
  }
})];
