import { MouseEvent, KeyboardEvent } from 'react'

export type ClickEvent<T = Element> = MouseEvent<T> | KeyboardEvent<T>
