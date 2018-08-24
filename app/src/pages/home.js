import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// import { Link } from "react-router-dom";
// import classNames from "classnames";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";

import FeedingListItems from "../components/listFeedings";
import PottyListItems from "../components/listPotties";
import SleepListItems from "../components/listSleeps";

import AddFeedingModal from "./addFeeding";
import AddPottyModal from "./addPotty";
import AddSleepModal from "./addSleep";

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
    feedingOpen: false,
    pottyOpen: false,
    sleepOpen: false
  };

  openFeedingModal = () => {
    this.setState({
      feedingOpen: true
    });
  };

  openPottyModal = () => {
    this.setState({
      pottyOpen: true
    });
  };

  openSleepModal = () => {
    this.setState({
      sleepOpen: true
    });
  };

  handleFeedingClose = value => {
    this.setState({ feedingOpen: false });
  };

  handlePottyClose = value => {
    this.setState({ pottyOpen: false });
  };

  handleSleepClose = value => {
    this.setState({ sleepOpen: false });
  };

  render() {
    const { classes, history } = this.props;

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
                onClick={this.openPottyModal}
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
                onClick={this.openSleepModal}
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
        <AddFeedingModal
          history={history}
          open={this.state.feedingOpen}
          onClose={this.handleFeedingClose}
        />
        <AddPottyModal
          history={history}
          open={this.state.pottyOpen}
          onClose={this.handlePottyClose}
        />
        <AddSleepModal
          history={history}
          open={this.state.sleepOpen}
          onClose={this.handleSleepClose}
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
