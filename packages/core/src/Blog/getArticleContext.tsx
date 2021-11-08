import {
  toDateString,
  getPostContent,
  getTopicContent,
  getPostBannerImageUrl,
} from '@lerna_storybook/utils'
import { Article } from './BlogArticle'

const getArticleContext = (sourceArticle: { [key: string]: any }): Article => {
  const { id, topic } = sourceArticle
  const topicColor = topic.color
  const topicText = getTopicContent(topic)?.text ?? ''
  const bannerImageUrl = getPostBannerImageUrl(sourceArticle['banner_img_url'])
  const articleTitle = getPostContent(sourceArticle)?.title ?? ''
  const tags = sourceArticle.tags
    .map((tag: { [key: string]: any }) => tag.name)
    .join(', ')
  const date = toDateString(
    new Date(sourceArticle['publish_date'] || sourceArticle.createdAt)
  )

  return {
    id,
    topicColor,
    topicText,
    bannerImageUrl,
    articleTitle,
    tags,
    date,
  }
}

export default getArticleContext
