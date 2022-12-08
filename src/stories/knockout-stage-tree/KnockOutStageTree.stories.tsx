import { ComponentStory, ComponentMeta } from '@storybook/react';

import KnockOutStageTree from './KnockOutStageTree';

export default {
  title: 'Stories/KnockOutStageTree',
  component: KnockOutStageTree,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof KnockOutStageTree>;

const Template: ComponentStory<typeof KnockOutStageTree> = (args) => <KnockOutStageTree {...args} />;

export const Google = Template.bind({});

Google.args = {

};
