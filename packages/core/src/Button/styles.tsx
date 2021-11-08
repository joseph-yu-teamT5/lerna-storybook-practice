import { css } from '@emotion/css'
import Color from 'color'
import colors from '@lerna_storybook/styles/lib/colors'

export type Animations = 'fillInFromLeft' | 'none'

export type Themes = 'dark' | 'light'

type ThemeMap = {
  [key in Themes]: {
    [key: string]: string
  }
}

type Styles = {
  [key: string]: any
}

const themeMap: ThemeMap = {
  dark: {
    base: colors.darkLava,
    hoverColor: colors.white,
    activeBackground: colors.middleGrey,
    activeColor: colors.white,
  },
  light: {
    base: colors.white,
    hoverColor: colors.darkLava,
    activeBackground: new Color(colors.white).alpha(0.5).toString(),
    activeColor: colors.white,
  },
}

const root = (theme: Themes): string => css`
  width: 240px;
  height: 60px;
  margin: 0;
  border: solid 1px ${themeMap[theme].base};
  border-radius: 2px;
  background-color: transparent;
  font-size: 14px;
  color: ${themeMap[theme].base};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`

const fillInFromLeft = (theme: Themes): string => {
  if (!themeMap[theme]) return ''

  return css`
    .background {
      width: 100%;
      height: 100%;
      background-color: ${themeMap[theme].base};
      position: absolute;
      z-index: 0;
      transform: translateX(-100%);
      transition: transform 0.25s;
    }
    .content {
      z-index: 1;
    }
    @media (hover: hover) {
      &:hover {
        color: ${themeMap[theme].hoverColor};
        .background {
          transform: translateX(0%);
        }
      }
    }
    &:active {
      background-color: ${themeMap[theme].activeBackground};
      color: ${themeMap[theme].activeColor};
      .background {
        opacity: 0;
      }
    }
  `
}

export default {
  root,
  fillInFromLeft,
} as Styles
