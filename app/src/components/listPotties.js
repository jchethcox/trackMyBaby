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
  const hour = x.getHours();
  const minute = x.getMinutes();
  var time = `${hour}:${minute}`;
  if (minute < 10) {
    time = `${hour}:0${minute}`;
  }
  const did1 = potty.did1;
  const size2 = potty.size2;
  var size = "";
  if (size2 === 0) {
    size = "none";
  } else if (size2 === 1) {
    size = "small";
  } else {
    size = "large";
  }
  var umTime = ``;
  if (hour < 13) {
    umTime = `${time} a.m.`;
  } else {
    if (minute < 10) {
      umTime = `${hour - 12}:0${minute} p.m.`;
    } else {
      umTime = `${hour - 12}:${minute} p.m.`;
    }
  }
  // const didPee = potty.did1;
  // const poopSize = potty.size2;
  const second = `Time: ${umTime}, Date: ${date}, Did #1: ${did1}, #2 Size: ${size}`;
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
