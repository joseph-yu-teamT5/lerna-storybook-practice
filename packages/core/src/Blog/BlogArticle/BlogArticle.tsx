import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { cx } from '@emotion/css'
import { ClickEvent } from '../../../types/events'
import TopicFlag from '../../TopicFlag'
import HighlightText from '../../HighlightText'
import styles from './styles'

export type Article = {
  /** Article id */
  id: string
  /** Article topic background and highlight color */
  topicColor: string
  /** Article topic text */
  topicText: string
  /** Article banner background image */
  bannerImageUrl: string
  /** Article title */
  articleTitle: string
  /** Article tags list as string */
  tags?: string
  /** Article created date */
  date?: string
}

export interface BlogArticleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Omit<Article, 'id'> {
  /** Function that's called when the article is clicked */
  onClick?: (event: ClickEvent) => void
}

const BlogArticle = ({
  className,
  topicColor,
  topicText,
  bannerImageUrl,
  articleTitle,
  tags = '',
  date = '',
  onClick,
}: BlogArticleProps): JSX.Element => (
  <article
    className={cx(styles.root, className)}
    onClick={(event) => onClick?.(event)}
  >
    <a className={styles.imageBlock}>
      <div className={styles.backgroundImage(bannerImageUrl)}></div>
      <TopicFlag
        className={styles.topicFlag}
        backgroundColor={topicColor}
        text={topicText}
      />
      {date && <div className="date">{date}</div>}
    </a>
    <div className={styles.contentBlock}>
      <h2 className="title">
        <HighlightText
          textType="excerpt"
          highlightHeight={9}
          highlightColor={topicColor}
          isDisplayByHover
          content={articleTitle}
        />
      </h2>
      <hr />
      <div className="tags">{tags}</div>
    </div>
  </article>
)

export default BlogArticle
