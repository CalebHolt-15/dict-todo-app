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
import StorageIcon from "@material-ui/icons/Storage"
import ListIcon from "@material-ui/icons/List"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import TocIcon from "@material-ui/icons/Toc"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty"
import SubjectIcon from "@material-ui/icons/Subject"

const SideBar = ({ opened, toggleDrawer, history, window }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isXS = useMediaQuery(theme.breakpoints.down("xs"))
  const container =
    window !== undefined ? () => window().document.body : undefined

  const [open, setOpen] = useState(false)

  const routes = [
    { path: "/home", icon: <HomeIcon />, name: "Home" },
    { path: "/dictionary", icon: <VideoLibraryIcon />, name: "Dictionary" },
    { path: "/material-table", icon: <TocIcon />, name: "MaterialTable" },
    { path: "/todolist", icon: <AddCircleOutlineIcon />, name: "TodoList" },
    { path: "/display-data", icon: <AddCircleIcon />, name: "DisplayData" },
    { path: "/react-table", icon: <TableChartIcon />, name: "ReactTable" },
    {
      path: "/pagination-table",
      icon: <TableChartIcon />,
      name: "PaginationTable"
    },
    {
      path: "/row-select-table",
      icon: <TableChartIcon />,
      name: "RowSelectTable"
    },
    {
      path: "/counter",
      icon: <HourglassEmptyIcon />,
      name: "Counter"
    },
    {
      path: "/counter2",
      icon: <HourglassEmptyIcon />,
      name: "Counter2"
    },
    {
      path: "/counter3",
      icon: <HourglassEmptyIcon />,
      name: "Counter3"
    },
    {
      path: "/counter-useMemo",
      icon: <HourglassEmptyIcon />,
      name: "CounterUseMemo"
    },
    {
      path: "/parent",
      icon: <SubjectIcon />,
      name: "Parent_Component"
    }
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
            [classes.drawerClose]: !opened
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: opened,
              [classes.drawerClose]: !opened
            })
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
