import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { cx } from '@emotion/css'
import styles, { HighlightConfig } from './styles'

type TextType = 'default' | 'subtitle' | 'slogan' | 'excerpt'

export interface HighlightTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** Text type */
  textType: TextType
  /** Height of the highlight */
  highlightHeight?: HighlightConfig['highlightHeight']
  /** Background Color behind the text */
  highlightColor: HighlightConfig['highlightColor']
  /** Background Color alpha */
  highlightAlpha?: HighlightConfig['highlightAlpha']
  /** Whether the highlight is triggered by hover */
  isDisplayByHover?: HighlightConfig['isDisplayByHover']
  /** Main content */
  content: string
}

const HighlightText = ({
  className,
  textType,
  highlightHeight = 20,
  highlightColor,
  highlightAlpha = 1,
  isDisplayByHover,
  content,
  ...props
}: HighlightTextProps): JSX.Element => {
  const highlightConfig = {
    highlightHeight,
    highlightColor,
    highlightAlpha,
    isDisplayByHover,
  }

  return (
    <div
      className={cx(styles.root(highlightConfig), styles[textType], className)}
      {...props}
    >
      <span dangerouslySetInnerHTML={{ __html: content }}></span>
    </div>
  )
}

export default HighlightText
