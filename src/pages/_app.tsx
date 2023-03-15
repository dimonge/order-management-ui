import '../styles/globals.css'
import React, { ReactElement, ReactNode, useRef } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'

import { initTranslation } from '@/utils'
import { useTranslation } from '@/utils/useTranslation'

// ThemeProvider

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '@/theme'
import createEmotionCache from '@/theme/createEmotionCache'
import { AppStateProvider } from '@/store/config'

const clientSideEmotionCache = createEmotionCache()

//initialization function
initTranslation(i18n)

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: AppPropsWithLayout) {
  const router = useRouter()
  const locale: string = router.locale || router.defaultLocale || ''
  const firstRender = useRef(true)

  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  useTranslation(pageProps, firstRender, locale)
  return getLayout(
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Partner app - Delivery as a service</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="delivery as a service platform" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nProvider i18n={i18n}>
          <AppStateProvider>
            <Component {...pageProps} />
          </AppStateProvider>
        </I18nProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
