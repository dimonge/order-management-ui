import React, { ReactElement, useState } from 'react'
import dynamic from 'next/dynamic'
import { styletron } from '@/utils/styletron'
import {
  DELIVERY_ROUTES,
  sidebarRoutes,
  footerMenusRoute,
  adminRoutes,
  adminPanelRoutes
} from '@/routes/routes'
import { Container } from '@mui/material'

type LayoutProps = {
  headerProps?: any
  footerProps?: any
  children: ReactElement
}

const DEFAULT_VIEW = 'app/home'
export default function Layout({ children }: LayoutProps) {
  const [view, setView] = React.useState(DEFAULT_VIEW)

  React.useEffect(() => {
    // check the browser routes to show the views
  }, [])

  React.useEffect(() => {
    // update the view path when the view changes
  }, [view])

  const AppNavBar = dynamic(() => import('@/components/BaseAppNavBar'), {
    ssr: false
  })
/*
  const Header = dynamic(() => import('@/partials/Header'), {
    ssr: false
  })
*/
  const StyleProvider = dynamic(() => import('@/utils/WebProvider'), {
    ssr: false
  })

  return (
    <StyleProvider engine={styletron}>
      <AppNavBar
        title="Modeliver"
        menuItems={DELIVERY_ROUTES}
        adminMenus={adminPanelRoutes}
        appMenus={sidebarRoutes}
        footerMenus={footerMenusRoute}
      />
      <div className="flex h-screen overflow-auto">
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Container
            style={{
              maxWidth: '100%',
              padding: '0.5rem 1rem',
              margin: '0 2rem'
            }}
          >
            <main>{children}</main>
          </Container>
        </div>
      </div>
    </StyleProvider>
  )
}
