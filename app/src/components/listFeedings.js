import React from "react";
import { connect } from "react-redux";
import { map, reverse } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, List } from "@material-ui/core";

const li = feeding => {
  return (
    <Link to={`/feedings/${feeding._id}`} className="router-link">
      <ListItem button>
        {/* <Icon style={{ color: "pink" }}>{"bottle"}</Icon> */}
        <ListItemText primary="Feeding" secondary={feeding.dateTime} />
      </ListItem>
    </Link>
  );
};

const FeedingListItems = props => (
  <div>
    <List>{reverse(map(li, props.feedings))}</List>
  </div>
);

const mapStateToProps = state => {
  return {
    feedings: state.feedings
  };
};

const connector = connect(mapStateToProps);

export default connector(FeedingListItems);
