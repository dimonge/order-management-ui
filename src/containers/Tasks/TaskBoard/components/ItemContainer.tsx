import React from 'react'
import { Card } from 'baseui/card'

export type ItemContainerProps = {
  children: React.PropsWithChildren<{}>
}
const ItemContainer = ({ children }: ItemContainerProps) => (
  <Card>{children}</Card>
)

export default ItemContainer
