import React from "react";
import { connect } from "react-redux";
import { map, reverse } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, List } from "@material-ui/core";

const li = potty => {
  return (
    <Link to={`/potties/${potty._id}`} className="router-link">
      <ListItem button>
        {/* <Icon style={{ color: "pink" }}>"toilet"</Icon> */}
        <ListItemText primary="Potty" secondary={potty.dateTime} />
      </ListItem>
    </Link>
  );
};

const PottyListItems = props => (
  <div>
    <List>{reverse(map(li, props.potties))}</List>
  </div>
);

const mapStateToProps = state => {
  return {
    potties: state.potties
  };
};

const connector = connect(mapStateToProps);

export default connector(PottyListItems);
