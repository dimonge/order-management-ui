import React from 'react'

type HeaderProps = {
  title: string
  children: React.PropsWithChildren<{}> | Element | Element[]
}
const Header = ({ title, children }: HeaderProps) => {
  return (
    <div className="basis-1/2">
      <div className="flex-1 flex flex-col px-6 py-2 sm:px-6 overflow-hidden">
        <div className="px-1 py-1">
          <h3 className="text-xl leading-6 font-body text-gray-900 py-6">
            {title}
          </h3>
        </div>
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-1 overflow-y-scroll"
          style={{ marginBottom: 100 }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Header
