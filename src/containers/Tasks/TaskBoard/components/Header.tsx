import { Grid, Typography } from '@mui/material'
import React from 'react'

type HeaderProps = {
  title: string
  children: React.PropsWithChildren<{}> | Element | Element[]
}
const Header = ({ title, children }: HeaderProps) => {
  return (
    <Grid item xs={6}>
      <Typography variant="body1" component="div" fontWeight="500">
        {title}
      </Typography>
      <div style={{ marginBottom: 50 }}>{children}</div>
    </Grid>
  )
}

export default Header
