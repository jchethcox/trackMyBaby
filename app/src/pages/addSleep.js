/* eslint-disable react/no-multi-comp */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Avatar from "@material-ui/core/Avatar";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
// import PersonIcon from "@material-ui/icons/Person";
// import AddIcon from "@material-ui/icons/Add";
// import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
// import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
// import red from "@material-ui/core/colors/red";
// import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import { connect } from "react-redux";

import { addSleep } from "../action-creators/sleeps";
import { NEW_SLEEP_FORM_UPDATED } from "../constants";

const styles = {
  redRoot: {
    color: "red"
  },
  checked: {},
  greenRoot: {
    color: "green",
    "&$checked": {
      color: "green"
    }
  },
  yellowRoot: {
    color: yellow[500],
    "&$checked": {
      color: yellow[500]
    }
  }
};

class AddSleep extends React.Component {
  state = {
    open: false,
    qualityScore: "green"
  };

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleOkClick = value => {
    this.props.onClose({ value });
  };

  handleRadioChange = event => {
    this.setState({ qualityScore: event.target.value });
  };

  render() {
    const {
      classes,
      onClose,
      selectedValue,
      sleep,
      onChange,
      history,
      ...other
    } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Add Sleep</DialogTitle>
        <div>
          <form
            autoComplete="off"
            onSubmit={this.props.addSleep(this.props.history)}
          >
            <TextField
              id="duration"
              label="Duration (min.)"
              value={sleep.duration}
              className={classes.textField}
              onChange={e => onChange("duration", e.target.value)}
              margin="normal"
            />
            <br />
            Rating
            <Radio
              checked={this.state.qualityScore === "red"}
              onChange={this.handleRadioChange}
              value="red"
              name="radio-button-demo"
              disableRipple
              classes={{
                root: classes.redRoot,
                checked: classes.checked
              }}
            />
            <Radio
              checked={this.state.qualityScore === "yellow"}
              onChange={this.handleRadioChange}
              value="yellow"
              name="radio-button-demo"
              disableRipple
              classes={{
                root: classes.yellowRoot,
                checked: classes.checked
              }}
            />
            <Radio
              checked={this.state.qualityScore === "green"}
              onChange={this.handleRadioChange}
              value="green"
              name="radio-button-demo"
              disableRipple
              classes={{
                root: classes.greenRoot,
                checked: classes.checked
              }}
            />
            <br />
            <span>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleOkClick}
                mini
                //variant="fab"
              >
                OK
              </Button>
            </span>
          </form>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  sleep: state.newSleep.data
});

const mapActionstoProp = dispatch => ({
  addSleep: history => e => {
    console.log("in addSleep action");
    e.preventDefault();
    dispatch(addSleep(history));
  },
  onChange: (field, value) =>
    dispatch({ type: NEW_SLEEP_FORM_UPDATED, payload: { [field]: value } })
});

AddSleep.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

const connector = connect(
  mapStateToProps,
  mapActionstoProp
);

const AddSleepModal = connector(withStyles(styles)(AddSleep));

export default AddSleepModal;
