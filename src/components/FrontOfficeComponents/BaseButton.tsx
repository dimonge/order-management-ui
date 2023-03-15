import * as React from 'react'
import Button from '@mui/material/Button'

export default ({ children, ...props }: any) => {
  return <Button variant='contained' {...props}>{children}</Button>
}
