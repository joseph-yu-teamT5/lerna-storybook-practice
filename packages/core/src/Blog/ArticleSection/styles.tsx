import { css } from '@emotion/css'
import { mq } from '@lerna_storybook/styles/lib/breakpoints'

export type ArticleType = 'inBlogPage' | 'inHomePage'

const articleBase = css`
  width: calc(100% - 2px);
  margin: 0 1px 10px 1px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.75s 0.25s ease-in-out, transform 0.75s 0.25s ease-in-out;
  @media screen and (${mq.min768}) {
    width: calc(50% - 2px);
  }
  @media screen and (${mq.min1280}) {
    width: calc(25% - 2px);
  }
  @media screen and (${mq.min1280}) {
    &:nth-child(4n + 1) {
      transition-delay: 0.25s;
    }
    &:nth-child(4n + 2) {
      transition-delay: 0.375s;
    }
    &:nth-child(4n + 3) {
      transition-delay: 0.5s;
    }
    &:nth-child(4n) {
      transition-delay: 0.625s;
    }
  }
  &.observed-show {
    opacity: 1;
    transform: translateY(0);
  }
`

const pageStyleMap = {
  inBlogPage: {
    section: css`
      width: 335px;
      @media screen and (${mq.min768}) {
        width: 620px;
      }
      @media screen and (${mq.min1024}) {
        width: 800px;
      }
      @media screen and (${mq.min1280}) {
        width: 1000px;
      }
    `,
    article: css`
      ${articleBase}
      @media screen and (${mq.min1024}) and (${mq.max1280}) {
        width: calc(33.33% - 2px);
      }
      @media screen and (${mq.min768}) and (${mq.max1024}) {
        &:nth-child(2n + 1) {
          transition-delay: 0.25s;
        }
        &:nth-child(2n) {
          transition-delay: 0.375s;
        }
      }
      @media screen and (${mq.min1024}) and (${mq.max1280}) {
        &:nth-child(3n + 1) {
          transition-delay: 0.25s;
        }
        &:nth-child(3n + 2) {
          transition-delay: 0.375s;
        }
        &:nth-child(3n) {
          transition-delay: 0.5s;
        }
      }
    `,
  },
  inHomePage: {
    section: css`
      width: 100%;
      align-items: center;
    `,
    article: css`
      ${articleBase}
      @media screen and (${mq.min768}) and (${mq.max1280}) {
        &:nth-child(2n + 1) {
          transition-delay: 0.25s;
        }
        &:nth-child(2n) {
          transition-delay: 0.375s;
        }
      }
    `,
  },
}

const root = (articleType: ArticleType): string => {
  return css`
    display: flex;
    flex-wrap: wrap;
    ${pageStyleMap[articleType].section}
  `
}

export default { pageStyleMap, root }
