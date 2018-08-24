import React from "react";
import { connect } from "react-redux";
import { map, reverse } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, List } from "@material-ui/core";

const li = potty => {
  const x = new Date(potty.dateTime);
  const month = x.getMonth() + 1;
  const day = x.getDate();
  const date = `${month}/${day}`;
  const hour = x.getHours() + 1;
  const minute = x.getMinutes() + 1;
  const time = `${hour}:${minute}`;
  // const didPee = potty.did1;
  // const poopSize = potty.size2;
  const second = `Time: ${time}, Date: ${date}, Did #1: true, #2 Size: 2`;
  return (
    <Link to={`/potties/${potty._id}`} className="router-link">
      <ListItem button>
        {/* <Icon style={{ color: "pink" }}>"toilet"</Icon> */}
        <ListItemText primary="Potty" secondary={second} />
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
