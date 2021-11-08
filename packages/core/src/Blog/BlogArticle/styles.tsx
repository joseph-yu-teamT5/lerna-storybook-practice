import { css } from '@emotion/css'
import colors from '@lerna_storybook/styles/lib/colors'

const root = css`
  max-width: 400px;
  width: 250px;
  height: 438px;
  background-color: ${colors.alabaster};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const imageBlock = css`
  width: 100%;
  height: 250px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  .date {
    width: calc(100% - 15px);
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.white};
    color: ${colors.white};
    position: absolute;
    bottom: 10px;
    right: 0;
  }
`

const backgroundImage = (bannerImageUrl: string): string => css`
  width: 100%;
  height: 100%;
  background-image: url(${bannerImageUrl});
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.45;
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }
`

const topicFlag = css`
  min-width: 160px;
  width: auto;
  height: 28px;
  padding: 0 12px;
  position: absolute;
  top: 9px;
  left: 0;
`

const contentBlock = css`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;

  .title,
  .tags {
    padding-right: 15px;
  }
  .title {
    height: 100px;
    margin: 15px 0 0 0;
    line-height: 20px;
    color: ${colors.darkLava};
  }
  hr {
    width: 100%;
    margin: 10px 0;
    border: 0;
    border-top: 1px solid ${colors.darkLava};
  }
  .tags {
    width: 100%;
    line-height: 16px;
    font-size: 12px;
    font-weight: 500;
    color: ${colors.middleGrey};
  }
`

export default {
  root,
  imageBlock,
  backgroundImage,
  topicFlag,
  contentBlock,
}
