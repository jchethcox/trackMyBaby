import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { takeLast } from "ramda";

import feedingListItems from "../components/listFeedings";
import pottyListItems from "../components/listPotties";
import sleepListItems from "../components/listSleeps";

import { Link } from "react-router-dom";

import baby from "../images/clemmy.jpg";

const feedings = feedingListItems;
const potties = pottyListItems;
const sleeps = sleepListItems;

const lastFeeding = feedings.lastFeeding;
const lastPotty = potties.lastPotty;
const lastSleep = sleeps.lastSleep;

const recents = [lastFeeding, lastPotty, lastSleep];

const last5Feedings = takeLast(5, feedings);
const last5Potties = takeLast(5, potties);
const last5Sleeps = takeLast(5, sleeps);

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

var mostRecent = ["Feeding 3:30PM", "Potty 12:17PM", "Sleep 4:10PM"];

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {/*<Avatar
            alt="Clemmy"
            src={logo}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />*/}
            <img src={baby} width="300" height="400" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            Most Recent
            <List component="nav">
              {mostRecent.map(item => (
                <ListItem button>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add Feeding
            </Button>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add Potty
            </Button>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add Sleep
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>List 5 Feedings</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>List 5 Potties</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>List 5 Sleeps</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
