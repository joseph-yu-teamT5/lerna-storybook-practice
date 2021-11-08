import React, { FC, PropsWithChildren } from 'react'

export interface ISubNavItem {
  name: string
  i18nKey: string
  as: string
  href: string
  imageUrl: string
  logEventKey: string
}

export interface INavItem {
  name: string
  i18nKey: string
  as: string
  href: string
  logEventKey: string
  isDropdown?: boolean
  sub?: ISubNavItem[]
}

export type NavProviderProps = PropsWithChildren<{
  value: INavItem[]
}>

const NavContext = React.createContext<INavItem[]>([])

const NavProvider: FC<NavProviderProps> = (props: NavProviderProps) => {
  const { children, value = [] } = props
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

const NavConsumer = NavContext.Consumer

export { NavContext, NavProvider, NavConsumer }

export default NavContext
