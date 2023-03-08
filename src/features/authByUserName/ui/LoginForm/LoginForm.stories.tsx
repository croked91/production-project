import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { LoginForm } from './LoginForm';

export default {
  title: 'featuries/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '1234' }
})];

export const WithError = Template.bind({});
WithError.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '1234', error: 'sadasdasds' }
})];

export const WithLoading = Template.bind({});
WithLoading.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '1234', isLoading: true }
})];
