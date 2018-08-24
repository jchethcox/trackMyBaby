import React from "react";
//import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Avatar from "@material-ui/core/Avatar";
// import classNames from "classnames";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";

import FeedingListItems from "../components/listFeedings";
import PottyListItems from "../components/listPotties";
import SleepListItems from "../components/listSleeps";

import baby from "../images/clemmy.jpg";

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
            <img src={baby} alt="Baby" width="300" height="400" />
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
          <Paper className={classes.paper}>
            Feedings
            <FeedingListItems />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            Potties
            <PottyListItems />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            Sleeps
            <SleepListItems />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
