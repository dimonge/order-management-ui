import React, { useState } from 'react'
import IconButton from '@/components/FrontOfficeComponents/IconButton'
import { ViewGridIcon } from '@heroicons/react/solid'

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const storedSidebarState = localStorage.getItem('sidebar-expanded')
  const [isSidebarOpen, setSidebar] = useState(
    storedSidebarState === null ? false : storedSidebarState === 'true'
  )

  const ITEMS = [
    {
      label: 'Delivery',
      href: '/tasks',
      imgUrl: 'https://via.placeholder.com/60x60'
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
      imgUrl: 'https://via.placeholder.com/60x60'
    },
    {
      label: 'Fleets',
      href: '/fleets',
      imgUrl: 'https://via.placeholder.com/60x60'
    }
  ]

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => {
                setSidebarOpen(!sidebarOpen)
                setSidebar(!isSidebarOpen)
                localStorage.setItem('sidebar-expanded', !sidebarOpen)
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <IconButton items={ITEMS}>
              <ViewGridIcon className="h-10 w-10 text-primary-500" />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
