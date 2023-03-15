import React from "react"
import { AppBar, Toolbar } from "@mui/material"

const TaskHeader = () => (
  <AppBar
    position="sticky"
    color="primary"
    sx={{ top: 0, boxShadow: '0px 1px 7px grey' }}
  >
    <Toolbar>New Task</Toolbar>
  </AppBar>
)

export default TaskHeader;