import '../src/styles/globals.css'
import * as NextImage from 'next/image'

import React from 'react'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { LightTheme, BaseProvider } from 'baseui'
import { ThemeProvider } from '@mui/material/styles'

import theme from "@/theme"
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 }
  }
}

const engine = new Styletron()
export const decorators = [
  (Story) => (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </BaseProvider>
    </StyletronProvider>
  )
]
