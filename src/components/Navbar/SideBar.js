import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { Home as HomeIcon, KeyboardBackspace } from "@material-ui/icons"
import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import PeopleIcon from "@material-ui/icons/People"
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import TableChartIcon from "@material-ui/icons/TableChart"
import YouTubeIcon from "@material-ui/icons/YouTube"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import clsx from "clsx"
import { useStyles } from "./useStyles"
import { useTheme } from "@material-ui/core/styles"

const SideBar = ({ opened, toggleDrawer, history, window }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isXS = useMediaQuery(theme.breakpoints.down("xs"))
  const container =
    window !== undefined ? () => window().document.body : undefined

  const [open, setOpen] = useState(false)

  const routes = [
    { path: "/homepage", icon: <HomeIcon />, name: "Home" },
    { path: "/dictionary", icon: <VideoLibraryIcon />, name: "Dictionary" },
    { path: "/todolist", icon: <YouTubeIcon />, name: "Todolist" },
  ]

  const getRoutes = (routes) => {
    return routes.map((route, index) => {
      return (
        <ListItem
          button
          onClick={() => {
            if (isXS) {
              toggleDrawer()
            }
            history.push(route.path)
          }}
          key={index}
        >
          <Tooltip title={route.name} placement="right">
            <ListItemIcon>{route.icon}</ListItemIcon>
          </Tooltip>
          <ListItemText primary={route.name} />
        </ListItem>
      )
    })
  }

  return (
    <nav className={classes.drawer}>
      {isXS ? (
        <Drawer
          container={container}
          variant="temporary"
          anchor="top"
          open={opened}
          onClose={toggleDrawer}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={toggleDrawer}>
              {theme.direction === "rtl" ? (
                <KeyboardBackspace />
              ) : (
                <KeyboardBackspace />
              )}
            </IconButton>
          </div>

          <Divider />

          <List>
            <ListItem>
              <Typography variant="h4">Media App</Typography>
            </ListItem>

            <Divider />
            {getRoutes(routes)}
          </List>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: opened,
            [classes.drawerClose]: !opened,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: opened,
              [classes.drawerClose]: !opened,
            }),
          }}
        >
          <div className={classes.toolbar} />
          <List>{getRoutes(routes)}</List>
        </Drawer>
      )}
    </nav>
  )
}

export const SideBarWithRouter = withRouter(SideBar)

{
  /* <div className={classes.root}>
  <Drawer
    // anchor="left"
    // open={opened}
    // onClose={toggleDrawer}
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      }),
    }}
  >
    <List>
      <div className={classes.toolbar}>
        <ListItem>
          <Box
            button
            onClick={() => {
              toggleDrawer();
              history.push("/home");
            }}
          >
            <Button>
              <Typography
                variant="h4"
                button
                key="text"
                onClick={() => {
                  history.push("/home");
                }}
              >
                Jingrwai
              </Typography>
            </Button>
          </Box>
        </ListItem>
      </div>

      <Divider />
      <ListItem button key="text">
        <ListItemIcon
          button
          onClick={() => {
            toggleDrawer();
            history.push("/home");
          }}
        >
          <HomeIcon />
          <Typography> Home</Typography>
        </ListItemIcon>
      </ListItem>

      <ListItem button key="text">
        <ListItemIcon
          button
          onClick={() => {
            history.push("/users/list");
          }}
        >
          <PeopleIcon />
          <Typography> Users List</Typography>
        </ListItemIcon>
      </ListItem>

      <ListItem button key="text">
        <ListItemIcon
          button
          onClick={() => {
            history.push("/song/add");
          }}
        >
          <PlaylistAddIcon />
          <Typography>Add Songs</Typography>
        </ListItemIcon>
      </ListItem>
    </List>
  </Drawer>
</div> */
}
