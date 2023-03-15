import React from 'react'

export type ItemContainerProps = {
  children: React.PropsWithChildren<{}>
}
const ItemContainer = ({ children }: ItemContainerProps) => (
  <div className="flex-col items-center space-x-3 min-w-full relative shadow rounded-lg border border-gray-300 bg-white px-0 py-2 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2">
    {children}
  </div>
)

export default ItemContainer
