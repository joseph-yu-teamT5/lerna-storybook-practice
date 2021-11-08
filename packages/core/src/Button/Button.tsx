import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { cx } from '@emotion/css'
import { ClickEvent } from '../../types/events'
import styles, { Animations, Themes } from './styles'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** The content to display inside the button */
  children: ReactNode
  /** Animation when the button is active, hovered, etc. */
  animation?: Animations
  /** Theme color of the button */
  theme?: Themes
  /** Function that's called when the button is clicked */
  onClick?: (event: ClickEvent) => void
}

const Button = ({
  children,
  className,
  animation = 'fillInFromLeft',
  theme = 'dark',
  ...props
}: ButtonProps): JSX.Element => {
  const animationType = styles[animation] && styles[animation](theme)

  return (
    <button
      className={cx(styles.root(theme), animationType, className)}
      {...props}
    >
      <div className="background"></div>
      <div className="content">{children}</div>
    </button>
  )
}

export default Button
