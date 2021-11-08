import { injectGlobal } from '@emotion/css'
import '@lerna_storybook/styles'
import { IntersectionObserverProvider } from '@lerna_storybook/core/lib/contexts/IntersectionObserverContext'
import { LinkCompProvider } from '@lerna_storybook/core/lib/contexts/LinkCompContext'
import { NavProvider } from '@lerna_storybook/core/lib/contexts/NavContext'
import { breakpoints } from '@lerna_storybook/styles/lib/breakpoints'
import mockNavItems from '../__mock__/mockNavItems'

export const decorators = [
  (Story) => {
    injectGlobal`
      body {
        font-family: Noto Sans, 'Lato', sans-serif;
      }
      .sb-show-main.sb-main-padded {
        padding: 0;
        margin: 0;
      }
    `
    return (
      <IntersectionObserverProvider>
        <LinkCompProvider>
          <NavProvider value={mockNavItems}>
            <Story />
          </NavProvider>
        </LinkCompProvider>
      </IntersectionObserverProvider>
    )
  },
]

const customViewports = Object.keys(breakpoints)
  .filter((value) => isNaN(Number(value)))
  .reduce(
    (total, key) => ({
      ...total,
      [key]: {
        name: key,
        styles: {
          width: breakpoints[key] + 'px',
          height: '90%',
        },
      },
    }),
    {}
  )

export const parameters = {
  viewport: { viewports: customViewports },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
