import { css } from '@emotion/css'
import Color from 'color'
import { mq } from '@lerna_storybook/styles/lib/breakpoints'

export type HighlightConfig = {
  highlightHeight: number
  highlightColor: string
  highlightAlpha: number
  isDisplayByHover: boolean
}

type Styles = {
  [key: string]: any
}

/**
 * span:
 * padding-left & padding-right -> horizontal distance outside the text
 * padding-bottom -> vertical distance between the top of text and highlight
 */

const root = ({
  highlightHeight,
  highlightColor,
  highlightAlpha,
  isDisplayByHover,
}: HighlightConfig): string => {
  const highlightBase = css`
    span {
      box-shadow: inset 0 -${highlightHeight}px 0 0 ${new Color(highlightColor).alpha(highlightAlpha).toString()};
    }
  `

  const highlightActive = isDisplayByHover
    ? css`
        @media (hover: hover) {
          &:hover {
            ${highlightBase}
          }
        }
      `
    : css`
        ${highlightBase}
      `

  return css`
    font-size: 24px;
    span {
      padding: 0 10px 3px 10px;
      box-decoration-break: clone;
    }
    ${highlightActive}
  `
}

const subtitle = css`
  font-size: 16px;
  span {
    padding: 0 10px 5px 10px;
  }
  @media screen and (${mq.min768}) {
    font-size: 18px;
  }
  @media screen and (${mq.min1024}) {
    font-size: 24px;
    span {
      padding: 0 10px 3px 10px;
    }
  }
  @media screen and (${mq.min1280}) {
    font-size: 28px;
  }
`

const slogan = css`
  @media screen and (${mq.min768}) {
    font-size: 28px;
    span {
      padding: 0 10px;
    }
  }
  @media screen and (${mq.min1024}) {
    font-size: 32px;
  }
`

const excerpt = css`
  font-size: 16px;
  cursor: pointer;
  span {
    padding: 0;
  }
`

export default {
  root,
  subtitle,
  slogan,
  excerpt,
} as Styles
