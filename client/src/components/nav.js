/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Yo Santa
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/packages" className={classes.link}>
            Packages
          </Link>
          <Link to="/checkout" className={classes.link}>
            Checkout
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
