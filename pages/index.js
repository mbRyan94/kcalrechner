import React, { useState } from "react";
import { Container, Tab } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Calculator from "../components/Calculator";
import KcalTable from "../components/KcalTable";
import TableSkeleton from "../components/TableSkeleton";
import Skeleton from "@material-ui/lab/Skeleton";

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
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5rem",
      marginTop: "10%",
    },
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
  table: {
    minWidth: 200,

    margin: "5% auto 0 auto",
  },
  tableSection: {
    margin: "10% auto 10% auto",
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      // marginTop: "550px",
    },
    [theme.breakpoints.up("xs")]: {
      // marginTop: "450px",
    },
  },
  tableSectionTitle: {
    fontSize: "3.5rem",
    margin: "5% 0 0 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  tableSectionSubTitle: {
    fontSize: "2.5rem",
    color: "#424242",
    margin: "1% 0 0 0 ",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  span: {
    fontWeight: "800",
  },
  h3: {
    fontSize: "2.5rem",
    marginBottom: 0,
  },
  p: {
    fontSize: "1.5rem",
  },
  interpretation: {
    marginTop: "5%",
  },
}));

const Index = () => {
  const [tableIsVisible, setTableVisibile] = useState(false);

  const handleTableVisiblity = () => {
    setTableVisibile(true);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Kcal-Rechner
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
                  <Calculator
                    classes={classes}
                    onSetTableActive={handleTableVisiblity}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className={classes.tableSection}>
          <h2 className={classes.tableSectionTitle}>
            Jedes Ziel braucht eine Basis.
          </h2>
          <p className={classes.tableSectionSubTitle}>
            Egal ob du abnehmen, aufbauen oder dein Gewicht halten willst, wir
            geben dir einen Richtwert, um dein Ziel zu erreichen.
          </p>
          {tableIsVisible === true ? (
            <KcalTable classes={classes} />
          ) : (
            <TableSkeleton />
          )}
          <div className={classes.interpretation}>
            <h3 className={classes.h3}>
              Wie soll ich diese Werte interpretieren?
            </h3>
            <p className={classes.p}>
              Bei den in der Tabelle genannten Werten handelt es sich um
              Richtwerte, die dir initial helfen sollen, um deinen individuellen
              Kcal-Bedarf zu ermitteln. Der Kcal-Rechner und die Kcal-Werte die
              rauskommen, kannst du beispielsweise nutzen, um deine Diät zu
              starten. Hierbei musst du zunächst verstehen, dass eine Diät,
              anders als bei all den Buzz Words, die in den Medien fallen, kein
              Hexenwerk ist.
            </p>
          </div>
          <div className={classes.interpretation}>
            <h3 className={classes.h3}>Wie geht es jetzt weiter?</h3>
            <p className={classes.p}>
              Die Frage ist nun, wie helfen dir diese Werte jetzt real weiter.
              Wie in dem vorherigen Abschnitt angeschnitten, ist zunächst
              wichtig zu verstehen, was eine Energiebilanz ist und was das mit
              deinem Körper zutun hat. In einfachen Worten kannst du dir das so
              vorstellen: <br />
              <br />
              Dein Körper benötigt eine bestimmte Menge an Energie am Tag, um
              deinen Alltag zu bewältigen. Diese Energie wird typischerweise
              über die Nahrungsaufnahme vollzogen. Isst du genau den
              Kcal-Bedarf, den dein Körper dafür benötigt - entsprechend dem
              vorgeschlagenen Aktivumsatz aus der Tabelle - hälst du dein
              Gewicht. Solltest du deinem Körper jedoch weniger Energie zuführen
              als er benötigt, entsteht ein Kcal-Defizit. Dieses Defizit muss
              jedoch trotzdem gedeckt werden. Da du nicht genug Energie in Form
              von Essen extern zuführst, holt sich dein Körper diese Energie aus
              deinen internen Reserven. Korrekt, damit ist die Energie gemeint,
              die in unseren Fettpölsterchen gespeichert ist.
              <br />
              <br /> Was heißt das jetzt genau? Durch einen Kcal-Defizit über
              einen längeren Zeitraum nimmt man ab. So einfach ist es. Kein
              Hokus Pokus, sondern ein kontrolliertes Kcal-Defizit über einen
              längeren Zeitraum. <br />
              <br />
              Aber warum emphasiere ich, dass man sich damit Zeit lassen soll?
              Immerhin will man ja in der Regel schnell Abnehmen... Ja, jedoch
              willst du das doch bestimmt in einem kontrollierten, nachhaltigen
              und nicht ungesunden Rahmen machen, oder? Bestimmt könnte man
              schlussfolgern, dass man nur noch drei Trauben am Tag isst oder
              von Luft und Liebe lebt, immerhin entspricht ein größeres Defizit
              theoretisch auch zu mehr Gewichtsverlust, oder? <br />
              <br />
              Naja, das Ziel sollte immer sein gesund zu sein und sich dabei
              wohl zu fühlen. Bei extremen Defiziten läuft man nur Gefahr, dass
              einen nach wenigen Tagen die Heißhungerattacken übermannen, man
              ständig hunger hat und somit auch die Laune in den Keller fällt.
              Nachhaltig ist das leider nicht. Somit sollte man als normale,
              nicht geübte Person, ein maximales Defizit von 500 Kcal fahren. In
              der Theorie entspricht das einem Equivalent von einem halben Kilo
              Fett. Aus dem Grund findest du in der Tabelle den Punkt
              "Aggressive Diät", der genau dass berücksichtigt. <br />
              <br />
              Das Wichtigste dabei ist, wie in einem Projekt, konstant und
              diszipliniert zu bleiben, dann erreichst du auch dein Ziel.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
