import {
  AppBar,
  Button,
  IconButton,
  ListItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { ExitToApp, Search } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { SideBarWithRouter } from "./SideBar";
import { withRouter } from "react-router-dom";
import { useStyles } from "./useStyles";
import clsx from "clsx";

const Navbar = ({ history }) => {
  const classes = useStyles();

  const [opened, setOpened] = useState(false);

  const handleDrawerToggle = () => {
    setOpened(!opened);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          // [classes.appBarShift]: opened,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Tooltip arrow title="home">
            <ListItem>
              <Button
                color="inherit"
                button
                key="text"
                onClick={() => {
                  history.push("/home");
                }}
              >
                <Typography noWrap>Media App</Typography>
              </Button>
            </ListItem>
          </Tooltip>

          <div className={classes.grow} />

          <IconButton>
            <Search />
          </IconButton>

          <div className={classes.root}></div>
          <Tooltip arrow title="Log out">
            <IconButton
              color="inherit"
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/home");
              }}
            >
              <ExitToApp />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <SideBarWithRouter opened={opened} toggleDrawer={handleDrawerToggle} />
    </>
  );
};

export const NavbarWithRouter = withRouter(Navbar); //to get access to props(history)
