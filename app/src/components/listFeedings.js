import React from "react";
import { connect } from "react-redux";
import { map, compose } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, Icon, ListItemText, List } from "@material-ui/core";

const li = feeding => {
  return (
    <Link to={`/feedings/${feeding._id}`} className="router-link">
      <ListItem button>
        <Icon style={{ color: "pink" }}>"bottle"</Icon>
        <ListItemText primary="Feeding" secondary={feeding.dateTime} />
      </ListItem>
    </Link>
  );
};

const feedingListItems = props => (
  <div>
    <List>{map(li, props.feedings)}</List>
  </div>
);

const mapStateToProps = state => {
  return {
    feedings: compose()(state.feedings)
  };
};

const connector = connect(mapStateToProps);

export default connector(feedingListItems);
