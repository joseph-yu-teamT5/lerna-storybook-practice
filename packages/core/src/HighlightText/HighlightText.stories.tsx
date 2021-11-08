import React from 'react'
import { Story, Meta } from '@storybook/react'
import colors from '@lerna_storybook/styles/lib/colors'
import HighlightText, { HighlightTextProps } from './HighlightText'

export default {
  title: 'lerna-storybook/HighlightText',
  component: HighlightText,
} as Meta

const Template: Story<HighlightTextProps> = (args) => (
  <HighlightText {...args} />
)

export const Default = Template.bind({})
Default.args = {
  textType: 'default',
  highlightColor: colors.fireEngineRed,
  content: 'Highlight Text',
}

export const Subtitle = Template.bind({})
Subtitle.args = {
  ...Default.args,
  textType: 'subtitle',
  highlightColor: colors.visionYellow,
  highlightAlpha: 0.8,
}

export const Slogan = Template.bind({})
Slogan.args = {
  ...Default.args,
  textType: 'slogan',
}

export const Excerpt = Template.bind({})
Excerpt.args = {
  ...Default.args,
  textType: 'excerpt',
  highlightHeight: 9,
  highlightColor: colors.ceruleanFrost,
  isDisplayByHover: true,
}
