import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
  title: 'ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = args => <ArticleTextBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
