import React, { ReactElement, useState } from 'react'
import dynamic from 'next/dynamic'

type LayoutProps = {
  headerProps?: any
  footerProps?: any
  children: ReactElement
}
export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const Sidebar = dynamic(() => import('@/partials/Sidebar'), {
    ssr: false
  })

  const Header = dynamic(() => import('@/partials/Header'), {
    ssr: false
  })
  return (
      <div className="flex h-screen overflow-auto">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>{children}</main>
        </div>
      </div>
  )
}
