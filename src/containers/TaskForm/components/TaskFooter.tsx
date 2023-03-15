import React from "react"
import { AppBar, Toolbar } from "@mui/material"

const TaskFooter = ({children}: any) => (
  <AppBar
    position="sticky"
    color="primary"
    sx={{
      top: 'auto',
      bottom: 0,
      boxShadow: '0px 1px 10px grey',
      padding: '5px',
      backgroundColor: '#fff'
    }}
  >
    <Toolbar>
      {children}
    </Toolbar>
  </AppBar>
)

export default TaskFooter;