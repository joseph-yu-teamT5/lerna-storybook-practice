import React from 'react'
import { Story, Meta } from '@storybook/react'
import TopicFlag, { TopicFlagProps } from './TopicFlag'

export default {
  title: 'lerna-storybook/TopicFlag',
  component: TopicFlag,
  argTypes: {},
} as Meta

const Template: Story<TopicFlagProps> = (args) => {
  return <TopicFlag {...args} />
}

export const Normal = Template.bind({})

Normal.args = {
  text: 'TopicFlag',
  backgroundColor: '#225111',
}

export const ConcaveFlag = Template.bind({})
ConcaveFlag.args = {
  text: 'ConcaveFlag',
  backgroundColor: '#d3de00',
  variant: 'concave',
}
export const ConvexFlag = Template.bind({})
ConvexFlag.args = {
  text: 'ConvexFlag',
  backgroundColor: '#c20c0c',
  variant: 'convex',
}
