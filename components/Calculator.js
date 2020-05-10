import React, { Component } from "react";
import { Container, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      weight: null,
      gender: "female",
      height: null,
      activityLevel: "",
    };
  }

  activityLevelText = {
    first:
      "1 - Außschließlich sitzende Tätigkeit, wie im Büro oder als Student, mit wenig bis keinen Sportaktivitäten.",
    second: "2 - Überwiegend sitzende Tätigkeit, mit moderaten Sporteinheiten.",
    third:
      "3 - Überwiegend stehende oder bewegende Tätigkeit mit moderaten Sporteinheiten.",
    forth:
      "4 - Ausübung körperlich schwerer Arbeiten mit hohem Aktivitätspensum.",
  };

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  addGender = (event) => {
    const gender = event.target.value;
    this.state = {
      ...this.state,
      gender,
    };
  };

  addAge = (event) => {
    const age = event.target.value;
    console.log("age: ", age);
    this.setState({
      ...this.state,
      age,
    });
  };

  addHeight = (event) => {
    const height = event.target.value;
    this.setState({
      ...this.state,
      height,
    });
  };

  addWeight = (event) => {
    const weight = event.target.value;
    this.setState({
      ...this.state,
      weight,
    });
  };

  calcKcal = () => {
    const { weight, age, height, gender, activityLevel } = this.state;

    if (gender == "male") {
      const baseMale = 66.47 + (13.7 * weight + 5 * height - 6.8 * age);
      const activeKcal = baseMale * activityLevel;
      this.setState({
        ...this.state,
        baseKcal: Math.floor(baseMale),
        activeKcal: Math.floor(activeKcal),
      });
    } else {
      const baseFemale = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;
      const activeKcal = baseFemale * activityLevel;
      this.setState({
        ...this.state,
        baseKcal: Math.floor(baseFemale),
        activeKcal: Math.floor(activeKcal),
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardContent className={classes.calc}>
          <Typography
            className={classes.calcHeaderText}
            variant="h2"
            gutterBottom
          >
            Berechne deinen Kcal-Bedarf.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Körpergröße [cm]
          </Typography>
          <TextField
            id="outlined-password-input"
            label="Körpergröße"
            type="text"
            variant="outlined"
            className={classes.calcBodySizeInputField}
            onChange={this.addHeight}
            error={isNaN(this.state?.height) ? true : false}
            helperText={
              isNaN(this.state?.height) ? "Bitte gebe eine Zahl an" : null
            }
          />
          <Grid container className={classes.spacing} spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Gewicht [kg]
              </Typography>
              <TextField
                id="outlined-password-input"
                label="Körpergewicht"
                type="text"
                error={isNaN(this.state?.weight) ? true : false}
                helperText={
                  isNaN(this.state?.weight) ? "Bitte gebe eine Zahl an" : null
                }
                variant="outlined"
                className={classes.calcBodySizeInputField}
                onChange={this.addWeight}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Alter [Jahre]
              </Typography>
              <TextField
                error={isNaN(this.state?.age) ? true : false}
                helperText={
                  isNaN(this.state?.age) ? "Bitte geben Sie eine Zahl an" : null
                }
                id="outlined-password-input"
                label="Alter"
                type="text"
                variant="outlined"
                className={classes.calcBodySizeInputField}
                onChange={this.addAge}
              />
            </Grid>
          </Grid>
          <Typography className={classes.spacing} variant="h6" gutterBottom>
            Geschlecht
          </Typography>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="female"
          >
            <FormControlLabel
              value="female"
              control={<Radio className={classes.color} />}
              label="Weiblich"
              onClick={this.addGender}
            />
            <FormControlLabel
              value="male"
              control={<Radio className={classes.color} />}
              label="Männlich"
              onClick={this.addGender}
            />
          </RadioGroup>
          <Typography className={classes.spacing} variant="h6" gutterBottom>
            Aktivitätslevel
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              {" "}
              Level von 1 - 4
            </InputLabel>
            <Select
              native
              value={this.state.activityLevel}
              onChange={this.handleChange}
              label="Level von 1 - 4"
              inputProps={{
                name: "activityLevel",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={1.2}>{this.activityLevelText.first}</option>
              <option value={1.4}>{this.activityLevelText.second}</option>
              <option value={1.6}>{this.activityLevelText.third}</option>
              <option value={2.0}>{this.activityLevelText.forth}</option>
            </Select>
          </FormControl>

          <Button
            className={(classes.spacing, classes.calcButton)}
            variant="contained"
            disabled={
              this.state?.age &&
              this.state?.weight &&
              this.state?.height &&
              this.state?.activityLevel
                ? false
                : true
            }
            onClick={() => {
              this.calcKcal();
            }}
          >
            Berechnen
          </Button>
          <Typography
            disabled={this.state?.activeKcal ? false : true}
            className={classes.spacing}
            variant="h6"
            gutterBottom
          >
            {this.state?.activeKcal
              ? `Dein Tagesbedarf liegt bei ${this.state?.activeKcal} Kcal`
              : null}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Calculator;
