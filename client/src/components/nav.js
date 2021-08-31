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
import Auth from "../utils/auth"
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "white",
      dark: "#002884",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});


export default function Navbar() {
  const classes = theme;
  const preventDefault = (event) => event.preventDefault();
  if (Auth.loggedIn()){
    return (
    <AppBar position="static" className={classes.palette}>
    <CssBaseline />
    <Toolbar>
      <div className={classes.navlinks}>
        <Button component={Link} to="/" onClick={() => Auth.logout()}>
          <Typography variant="h6" className={classes.logo}>
            Logout
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
    )
  } else
  return (
    <AppBar position="static" className={classes.palette}>
      <CssBaseline />
      <Toolbar className="tool">
        <div className={classes.navlinks}>
          <Button component={Link} to="/">
            <Typography variant="h6" className={classes.logo}>
              Login
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
