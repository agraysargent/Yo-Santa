import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Sam from "../images/unclesam.jpg";
import Krampus from "../images/krampus.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Dog from "../images/dogsam.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Yo Santa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Summer Options
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Pick One of Our Summer Options!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid alignItems="center" container spacing={5}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                component="img"
                alt="Sam"
                height="300"
                image={Sam}
                title="Sam"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Druncle Sam!!!
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The propaganda Uncle Sam is old and tired. We've modernized
                  our Sam. Wanna drink beer? Wanna set off fireworks without
                  taking any safety precautions? Our Sam fits all your needs and
                  more.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="/Checkout"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Purchase
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                component="img"
                alt="DogSam"
                height="300"
                image={Dog}
                title="DogSam"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Red, White, and Blue!!!
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  So you're a traditionalist! No problem we still have an option
                  for you. Get Uncle Sam and all the patriotism you can handle.
                  We're talking solo cups, National Anthems, and setting off
                  fireworks with guns!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="/Checkout"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Purchase
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
