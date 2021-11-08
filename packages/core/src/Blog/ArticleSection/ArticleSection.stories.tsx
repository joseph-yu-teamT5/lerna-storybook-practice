import React from 'react'
import { Story, Meta } from '@storybook/react'
import mockPost from '../../../__mock__/mockPost.json'
import getArticleContext from '../getArticleContext'
import ArticleSection, { ArticleSectionProps } from './ArticleSection'

export default {
  title: 'lerna-storybook/Blog/ArticleSection',
  component: ArticleSection,
} as Meta

const articleList = [mockPost, mockPost, mockPost, mockPost, mockPost].map(
  (sourceArticle) => getArticleContext(sourceArticle)
)

const Template: Story<ArticleSectionProps> = (args) => (
  <ArticleSection {...args} />
)

export const InBlog = Template.bind({})
InBlog.args = {
  articleType: 'inBlogPage',
  articleList,
}

export const InHome = Template.bind({})
InHome.args = {
  articleType: 'inHomePage',
  articleList,
}
