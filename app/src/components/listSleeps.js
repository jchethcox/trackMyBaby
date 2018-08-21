import React from "react";
import { connect } from "react-redux";
import { map, compose } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, Icon, ListItemText, List } from "@material-ui/core";

const li = sleep => {
  return (
    <Link to={`/sleeps/${sleep._id}`} className="router-link">
      <ListItem button>
        <Icon style={{ color: "pink" }}>"bed"</Icon>
        <ListItemText primary="Sleep" secondary={sleep.dateTime} />
      </ListItem>
    </Link>
  );
};

const sleepListItems = props => (
  <div>
    <List>{map(li, props.sleeps)}</List>
  </div>
);

const mapStateToProps = state => {
  return {
    sleeps: compose()(state.sleeps)
  };
};

const connector = connect(mapStateToProps);

export default connector(sleepListItems);
