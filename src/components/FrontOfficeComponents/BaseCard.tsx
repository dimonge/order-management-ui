import * as React from 'react'

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"

type CardProps = {
  cardProps?: any
  cardContentProps?: any
  cardActionsProps?: any
  actions?: any
  children: React.ReactNode
}

export default ({ children, actions, ...props }: CardProps) => {
  return (
    <Card {...props.cardProps}>
      <CardContent {...props.cardContentProps}>{children}</CardContent>
      <CardActions {...props.cardActionsProps}>{actions}</CardActions>
    </Card>
  )
}
