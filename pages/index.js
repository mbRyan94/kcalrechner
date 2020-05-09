import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Calculator from "../components/Calculator";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heroSection: {
    backgroundImage:
      "url(" +
      `${require("../public/static/kcal-rechner-hintergrundbild.png")}` +
      ")",
    backgroundSize: "cover",

    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    height: "100vh",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  container: {
    marginTop: "8.5%",
    display: "flex",
  },
  heroText: {
    color: "#ffffff",
    fontWeight: 400,
    fontSize: "5rem",
  },
  calcHeaderText: {
    fontSize: "2.5rem",
    fontWeight: 400,
    color: theme.palette.grey[800],
    marginBottom: "5%",
  },
  calc: {
    padding: "5%",
  },
  calcBodySizeInputField: {
    width: "100%",
  },
  spacing: {
    marginTop: "5%",
  },
  calcButton: {
    backgroundColor: theme.palette.secondary.main,
    float: "right",
    margin: "5% 0 5% 0",
    color: "#ffffff",
    padding: "3% 10%",
  },
  activeKcalText: {
    color: theme.palette.secondary.main,
  },
  color: {
    color: theme.palette.secondary.main,
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            lastminutebody
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroSection}>
          <div className={classes.overlay}>
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} className={classes.container}>
                  <Typography
                    className={classes.heroText}
                    variant="h1"
                    gutterBottom
                  >
                    Der erste Schritt zu deinem Traumkörper.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6} className={classes.container}>
                  <Calculator classes={classes} />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
