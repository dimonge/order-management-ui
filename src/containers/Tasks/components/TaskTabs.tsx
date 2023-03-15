import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AppBar, SpeedDial } from '@mui/material'
import AddTaskButton from './AddTaskButton'
import { useRouter } from 'next/router'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      style={{width: "100%"}}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const TaskTabs = ({ liveView, mapView}: any) => {
  const router = useRouter()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper'
        }}
        display="flex"
        flexDirection="column"
        //height="calc(100vh - 80px)"
        //minHeight="calc(100vh - 80px)"
      >
        <AppBar position="fixed" sx={{ marginTop: '64px' }}>
          <Tabs
            orientation="horizontal"
            centered
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={handleChange}
            aria-label="Task tabs"
          >
            <Tab label="Live" {...a11yProps(0)} />
            <Tab label="Map" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <Box sx={{ marginTop: '30px' }}>
          <TabPanel value={value} index={0}>
            {liveView}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {mapView}
          </TabPanel>
        </Box>
      </Box>      
    </>
  )
}

export default TaskTabs;