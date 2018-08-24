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
  const time = `${hour}:${minute}`;
  const rating = feeding.feedingRating;
  const amount = feeding.milkAmount + feeding.formulaAmount;
  const second = `Time: ${time}, Date: ${date}, Amount: ${amount} ounces, Rating: ${rating}`;
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
