/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  palette: {
    backgroundColor: "#607d8b",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <AppBar position="static" className={classes.palette}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Button component={Link} to="/">
            <Typography variant="h6" className={classes.logo}>
              Sign-In
            </Typography>
          </Button>

          <Button component={Link} to="/packages">
            <Typography variant="h6" className={classes.logo}>
              Packages
            </Typography>
          </Button>

          <Button component={Link} to="/checkout">
            <Typography variant="h6" className={classes.logo}>
              Checkout
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
