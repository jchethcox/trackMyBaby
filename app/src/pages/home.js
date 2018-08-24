import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { takeLast } from "ramda";

import FeedingListItems from "../components/listFeedings";
import PottyListItems from "../components/listPotties";
import SleepListItems from "../components/listSleeps";

import { Link } from "react-router-dom";
import SimpleDialogWrapped from "./dialog";
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

class HomeComp extends React.Component {
  state = {
    open: false
  };

  openFeedingModal = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

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
                onClick={this.openFeedingModal}
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
        <SimpleDialogWrapped
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

HomeComp.propTypes = {
  classes: PropTypes.object.isRequired
};

const Home = withStyles(styles)(HomeComp);

export default Home;
