import { useEffect } from 'react'
import { i18n } from '@lingui/core'

export const useTranslation = (
  pageProps: any,
  firstRender: any,
  locale: any
) => {
  if (pageProps.translation && firstRender.current) {
    // load the translations for the locale
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)

    // render only once
    firstRender.current = false
  }

  useEffect(() => {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation)
      i18n.activate(locale)
    }
  }, [locale, pageProps.translation])
}
