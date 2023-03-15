import React from 'react'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'

interface StyleProviderProps {
  children: React.PropsWithChildren<{}>
  engine: any
}
export default function StyleProvider({
  engine,
  children
}: StyleProviderProps) {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>{children}</BaseProvider>
    </StyletronProvider>
  )
}
