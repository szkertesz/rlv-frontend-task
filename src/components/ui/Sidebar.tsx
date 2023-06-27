import Drawer from '@mui/material/Drawer'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const Sidebar = () => {
  const drawerWidth = 240
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SpaceDashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  )
}

export default Sidebar
