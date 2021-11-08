import React, { FC, PropsWithChildren } from 'react'

export type NextRouter = {
  route: string
  pathname: string
  query: {
    [key: string]: string | string[] | undefined
  }
  asPath: string
  basePath: string
  locale?: string
  locales?: string[]
  defaultLocale?: string
  domainLocales?: Array<{
    http?: true
    domain: string
    locale?: string[]
    defaultLocale: string
  }>
  isLocaleDomain: boolean
  push(url: string, as?: string): Promise<boolean>
}

export type LinkProps = PropsWithChildren<{
  href: string
  as: string
}>

export type ContextType = {
  Link: FC<LinkProps>
  useRouter: () => NextRouter
}

const DefaultLink: FC<LinkProps> = (props: LinkProps): JSX.Element => {
  return <>{props.children}</>
}

const DefaultUseRouter = (): NextRouter => ({
  route: '',
  pathname: '',
  query: {},
  asPath: '',
  basePath: '',
  isLocaleDomain: false,
  push: (url) =>
    new Promise<boolean>(() => {
      console.log(url)
    }),
})

const defaultContext = {
  Link: DefaultLink,
  useRouter: DefaultUseRouter,
}

const LinkCompContext = React.createContext<ContextType>(defaultContext)

type LinkCompProviderProps = PropsWithChildren<{
  value: ContextType
}>

const LinkCompProvider: FC<LinkCompProviderProps> = (
  props: LinkCompProviderProps
) => {
  const { children, value = defaultContext } = props
  return (
    <LinkCompContext.Provider value={value}>
      {children}
    </LinkCompContext.Provider>
  )
}

const LinkCompConsumer = LinkCompContext.Consumer

export { LinkCompContext, LinkCompProvider, LinkCompConsumer }

export default LinkCompContext
