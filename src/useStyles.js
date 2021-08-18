import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cover: {
    // width: "flex",
    height: 140,
  },
  root: {
    // display: "flex",
    maxWidth: 345
  },
  grow: {
    flexGrow: "1",
  },
  toolbar: theme.mixins.toolbar,
}));

