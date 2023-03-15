import React from 'react'
import { RoutesType } from '../routes/routes'
import Link from 'next/link'

type SettingsSidebarItemProps = {
  pathname: string
  routes: RoutesType[]
}
const SettingsSidebarItem = ({
  pathname,
  routes
}: SettingsSidebarItemProps) => {
  /*<li
          key={key}
          className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
            isCurrentPath && 'bg-gray-900'
          }`}
        >
          <Link
            exact
            href={path}
            className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
              isCurrentPath && 'hover:text-gray-200'
            }`}
          >
            <div className="flex items-center">
              <Icon
                className={`flex-shrink-0 h-6 w-6 text-gray-400 ${
                  isCurrentPath && '!text-indigo-500'
                }`}
              />

              <span
                className={`text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-white`}
              >
                {name}
              </span>
            </div>
          </Link>
              </li>*/

  const routerComp = routes.map(
    ({ key, icon: Icon, name, path }: RoutesType) => {
      const isCurrentPath = pathname.includes(path)
      return (
        <li key={key} className="mr-0.5 md:mr-0 md:mb-0.5">
          <a
            exact
            href={path}
            className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap ${
              isCurrentPath && 'bg-indigo-50'
            }`}
          >
            <Icon
              className={`w-6 h-6 flex-shrink-0 text-gray-400 mr-2 ${
                isCurrentPath && 'text-indigo-400'
              }`}
            />
            <span
              className={`text-sm font-medium ${
                isCurrentPath ? 'text-indigo-500' : 'hover:text-gray-700'
              }`}
            >
              {name}
            </span>
          </a>
        </li>
      )
    }
  )
  return routerComp
}

export default SettingsSidebarItem
