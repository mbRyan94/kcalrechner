import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";

function createData(title, calories) {
  return { title, calories };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];

const kcalDeficitReference = {
  lightCut: 250,
  aggressivCut: 500,
  lightGain: 250,
  aggressivGain: 500,
};

class KcalTable extends Component {
  constructor(props) {
    super(props);
  }

  calcLightDeficit = (activeKcal) => {
    return activeKcal - kcalDeficitReference.lightCut;
  };

  calcAggressivDeficit = (activeKcal) => {
    return activeKcal - kcalDeficitReference.aggressivCut;
  };

  calcLightSurplus = (activeKcal) => {
    return activeKcal + kcalDeficitReference.lightGain;
  };

  calcAggressivSurplus = (activeKcal) => {
    return activeKcal + kcalDeficitReference.aggressivGain;
  };

  render() {
    const { classes } = this.props;
    console.log("Table ActiveKcal Props: ", this.props);

    return (
      <TableContainer className={classes?.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Bezeichung</TableCell>
              <TableCell align="left">Kalorien</TableCell>
              <TableCell align="left">Erklärung</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={1}>
              <TableCell component="th" scope="row">
                Grundumsatz
              </TableCell>
              <TableCell component="th" scope="row">
                {this.props?.baseKcal}
              </TableCell>
              <TableCell component="th" scope="row">
                Der Kalorienbedarf, den du benötigst, solltest du den ganzen Tag
                nur im Bett liegen.
              </TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell component="th" scope="row">
                Aktivumsatz (Gewicht halten)
              </TableCell>
              <TableCell component="th" scope="row">
                {this.props?.activeKcal}
              </TableCell>
              <TableCell component="th" scope="row">
                Der Kalorienbedarf, den du benötigst, wenn du einen normalen Tag
                gemäß der Aktivitätenangabe von oben erlebst.
              </TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell component="th" scope="row">
                Leichte Diät
              </TableCell>
              <TableCell component="th" scope="row">
                {this.props?.activeKcal
                  ? this.calcLightDeficit(this.props?.activeKcal)
                  : null}
              </TableCell>
              <TableCell component="th" scope="row">
                Der Kalorienbedarf, den du benötigst, solltest du eine
                nachhaltige und entspannte Diät über einen längeren Zeitraum
                anstreben.
              </TableCell>
            </TableRow>
            <TableRow key={4}>
              <TableCell component="th" scope="row">
                Aggressive Diät
              </TableCell>
              <TableCell component="th" scope="row">
                {this.props?.activeKcal
                  ? this.calcAggressivDeficit(this.props?.activeKcal)
                  : null}
              </TableCell>
              <TableCell component="th" scope="row">
                Der Kalorienbedarf, den du benötigst, solltest du eine schnellen
                Gewichtsverlust anstreben.
              </TableCell>
            </TableRow>
            <TableRow key={5}>
              <TableCell component="th" scope="row">
                Aggressive Diät
              </TableCell>
              <TableCell component="th" scope="row">
                {this.props?.activeKcal
                  ? this.calcLightSurplus(this.props?.activeKcal)
                  : null}
              </TableCell>
              <TableCell component="th" scope="row">
                Der Kalorienbedarf, den du benötigst, solltest du eine
                nachhaltig und kontrolliert Gewicht über einen längeren Zeitraum
                aufbauen willst.
              </TableCell>
            </TableRow>
            <TableRow key={6}>
              <TableCell component="th" scope="row">
                Aggressive Diät
              </TableCell>
              <TableCell component="th" scope="row">
                {this.props?.activeKcal
                  ? this.calcAggressivSurplus(this.props?.activeKcal)
                  : null}
              </TableCell>
              <TableCell component="th" scope="row">
                Der Kalorienbedarf, den du benötigst, solltest du eine schnell,
                jedoch nicht unkontrolliert an Gewicht zunehmen willst.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    activeKcal: state?.activeKcal,
    baseKcal: state?.baseKcal,
  };
};

export default connect(mapStatetoProps, null)(KcalTable);
