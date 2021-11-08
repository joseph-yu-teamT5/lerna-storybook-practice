import React from 'react'
import { css, cx } from '@emotion/css'
import colors from '@lerna_storybook/styles/lib/colors'

export type TopicFlagProps = {
  text: string
  color?: keyof typeof colors
  backgroundColor: string
  className?: string
  variant?: 'concave' | 'convex'
}

const cssTopicFlag = ({
  color,
  backgroundColor,
}: Required<Pick<TopicFlagProps, 'backgroundColor' | 'color'>>) => css`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 32px;
  font-weight: 600;
  font-size: 12px;
  color: ${colors[color]};
  background-color: ${backgroundColor};

  &.concave::after {
    content: '';
    position: absolute;
    top: 0;
    right: -16px;
    border: 16px solid ${backgroundColor};
    border-right-color: transparent;
  }
  &.convex::after {
    content: '';
    position: absolute;
    top: 0;
    right: -32px;
    border: 16px solid transparent;
    border-left-color: ${backgroundColor};
  }
`

const TopicFlag = ({
  text,
  color = 'white',
  backgroundColor,
  className,
  variant,
}: TopicFlagProps): JSX.Element => {
  return (
    <div
      className={cx(
        cssTopicFlag({ color, backgroundColor }),
        className,
        variant
      )}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    ></div>
  )
}

export default TopicFlag
