import React from "react";
import { connect } from "react-redux";
import { map, reverse } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, List } from "@material-ui/core";

const li = sleep => {
  return (
    <Link to={`/sleeps/${sleep._id}`} className="router-link">
      <ListItem button>
        {/* <Icon style={{ color: "pink" }}>"bed"</Icon> */}
        <ListItemText primary="Sleep" secondary={sleep.dateTime} />
      </ListItem>
    </Link>
  );
};

const SleepListItems = props => (
  <div>
    <List>{reverse(map(li, props.sleeps))}</List>
  </div>
);

const mapStateToProps = state => {
  return {
    sleeps: state.sleeps
  };
};

const connector = connect(mapStateToProps);

export default connector(SleepListItems);
