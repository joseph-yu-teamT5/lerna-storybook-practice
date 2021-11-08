import React from 'react'
import { Story, Meta } from '@storybook/react'
import mockPost from '../../../__mock__/mockPost.json'
import getArticleContext from '../getArticleContext'
import BlogArticle, { BlogArticleProps } from './BlogArticle'

export default {
  title: 'lerna-storybook/Blog/BlogArticle',
  component: BlogArticle,
} as Meta

const Template: Story<BlogArticleProps> = (args) => <BlogArticle {...args} />

export const Default = Template.bind({})
Default.args = {
  ...getArticleContext(mockPost),
}
