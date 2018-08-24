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
  const time = `${hour}:${minute}`;
  const rating = sleep.sleepRating;
  const duration = sleep.duration;
  const second = `Time: ${time}, Date: ${date}, Rating: ${rating}. Duration: ${duration} hours`;
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
