import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem ipsum dolarem...',
  text: 'Lorem ipsum dolarem...'
};

export const Error = Template.bind({});
Error.args = {
  title: 'Lorem ipsum dolarem...',
  text: 'Lorem ipsum dolarem...',
  theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Lorem ipsum dolarem...'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem ipsum dolarem...'
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  title: 'Lorem ipsum dolarem...',
  text: 'Lorem ipsum dolarem...'
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyTitle = Template.bind({});
DarkOnlyTitle.args = {
  title: 'Lorem ipsum dolarem...'
};
DarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyText = Template.bind({});
DarkOnlyText.args = {
  text: 'Lorem ipsum dolarem...'
};
DarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const TextSizeL = Template.bind({});
TextSizeL.args = {
  size: TextSize.L,
  title: 'Lorem ipsum dolarem...',
  text: 'Lorem ipsum dolarem...'
};
