import React from "react";
import { connect } from "react-redux";
import { map, reverse } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, List } from "@material-ui/core";

const li = sleep => {
  const x = new Date(sleep.dateTime);
  const month = x.getMonth() + 1;
  const day = x.getDate();
  const date = `${month}/${day}`;
  const hour = x.getHours();
  const minute = x.getMinutes();
  var time = `${hour}:${minute}`;
  if (minute < 10) {
    time = `${hour}:0${minute}`;
  }
  const rating = sleep.sleepRating;
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
  const duration = sleep.duration;
  const second = `Time: ${umTime}, Date: ${date}, Rating: ${finalRating}. Duration: ${duration} hours`;
  return (
    <Link to={`/sleeps/${sleep._id}`} className="router-link">
      <ListItem button>
        {/* <Icon style={{ color: "pink" }}>"bed"</Icon> */}
        <ListItemText primary="Sleep" secondary={second} />
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
