import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'lerna-storybook/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Dark = Template.bind({})
Dark.args = {
  children: 'Read More',
  animation: 'fillInFromLeft',
  theme: 'dark',
}

export const Light = Template.bind({})
Light.args = {
  ...Dark.args,
  theme: 'light',
}
