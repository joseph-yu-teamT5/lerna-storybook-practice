import React, { HTMLAttributes } from 'react'
import { cx } from '@emotion/css'
import { ClickEvent } from '../../../types/events'
import BlogArticle, { Article } from '../BlogArticle'
import styles, { ArticleType } from './styles'

export interface ArticleSectionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /** Describe where the article section is used */
  articleType: ArticleType
  /** Article list to display */
  articleList: Article[]
  /** Function that's called when each article is clicked */
  onClick?: (event: ClickEvent, data: Article) => void
}

const ArticleSection = ({
  className,
  articleType,
  articleList,
  onClick,
}: ArticleSectionProps): JSX.Element => (
  <section className={cx(styles.root(articleType), className)}>
    {articleList.map((data, index) => (
      <BlogArticle
        key={`${data.id}-${index}`}
        className={cx(styles.pageStyleMap[articleType]?.article, 'observed')}
        topicColor={data.topicColor}
        topicText={data.topicText}
        bannerImageUrl={data.bannerImageUrl}
        articleTitle={data.articleTitle}
        tags={data.tags}
        date={data.date}
        onClick={(event) => onClick?.(event, data)}
      />
    ))}
  </section>
)

export default ArticleSection
