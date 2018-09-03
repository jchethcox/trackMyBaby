/* eslint-disable react/no-multi-comp */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

import { addFeeding } from "../action-creators/feedings";
import { NEW_FEEDING_FORM_UPDATED } from "../constants";

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

class AddFeeding extends React.Component {
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
      feeding,
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
        <DialogTitle id="simple-dialog-title">Add Feeding</DialogTitle>
        <div>
          <form
            autoComplete="off"
            onSubmit={this.props.addFeeding(this.props.history)}
          >
            <TextField
              id="milkAmount"
              label="Milk Amount (oz)"
              value={feeding.milkAmount}
              onChange={e => onChange("milkAmount", Number(e.target.value))}
              className={classes.textField}
              margin="normal"
            />
            <br />
            <TextField
              id="formulaAmount"
              label="Formula Amount (oz)"
              value={feeding.formulaAmount}
              onChange={e => onChange("formulaAmount", Number(e.target.value))}
              className={classes.textField}
              margin="normal"
            />
            <br />
            <TextField
              id="duration"
              label="Duration (min.)"
              value={feeding.duration}
              onChange={e => onChange("duration", e.target.value)}
              className={classes.textField}
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
                type="submit"
                color="primary"
                className={classes.button}
                onClick={this.handleOkClick}
                mini
                variant="fab"
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
  feeding: state.newFeeding.data
});

const mapActionsToProps = dispatch => ({
  addFeeding: history => e => {
    console.log("in addFeeding action");
    e.preventDefault();
    dispatch(addFeeding(history));
  },
  onChange: (field, value) =>
    dispatch({ type: NEW_FEEDING_FORM_UPDATED, payload: { [field]: value } })
});
AddFeeding.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

const connector = connect(
  mapStateToProps,
  mapActionsToProps
);
const AddFeedingModal = connector(withStyles(styles)(AddFeeding));

export default AddFeedingModal;
