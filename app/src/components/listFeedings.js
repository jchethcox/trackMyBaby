import React from "react";
import { connect } from "react-redux";
import { map, reverse } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, List } from "@material-ui/core";

const li = feeding => {
  const x = new Date(feeding.dateTime);
  const month = x.getMonth() + 1;
  const day = x.getDate();
  const date = `${month}/${day}`;
  const hour = x.getHours();
  const minute = x.getMinutes();
  var time = `${hour}:${minute}`;
  if (minute < 10) {
    time = `${hour}:0${minute}`;
  }
  const rating = feeding.feedingRating;
  var finalRating = "";
  if (rating === 0) {
    finalRating = "bad";
  } else if (rating === 1) {
    finalRating = "okay";
  } else {
    finalRating = "good";
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
  const amount = feeding.milkAmount + feeding.formulaAmount;
  const second = `Time: ${umTime},  Date: ${date}, Amount: ${amount} ounces, Rating: ${finalRating}`;
  return (
    <Link to={`/feedings/${feeding._id}`} className="router-link">
      <ListItem button>
        {/* <Icon style={{ color: "pink" }}>{"bottle"}</Icon> */}
        <ListItemText primary="Feeding" secondary={second} />
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
