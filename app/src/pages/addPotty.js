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
//import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
// import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
// import red from "@material-ui/core/colors/red";
// import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";

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

class AddPotty extends React.Component {
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
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Add Potty</DialogTitle>
        <div>
          Pee'd?
          <Radio
            checked={this.state.did1 === "red"}
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
            checked={this.state.did1 === "green"}
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
          Poop Size
          <Radio
            checked={this.state.size2 === "red"}
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
            checked={this.state.size2 === "yellow"}
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
            checked={this.state.size2 === "green"}
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
        </div>
      </Dialog>
    );
  }
}

AddPotty.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

const AddPottyModal = withStyles(styles)(AddPotty);

export default AddPottyModal;
