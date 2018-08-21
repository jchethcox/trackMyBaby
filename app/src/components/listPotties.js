import React from "react";
import { connect } from "react-redux";
import { map, compose } from "ramda";
import { Link } from "react-router-dom";
import { ListItem, Icon, ListItemText, List } from "@material-ui/core";

const li = potty => {
  return (
    <Link to={`/potties/${potties._id}`} className="router-link">
      <ListItem button>
        <Icon style={{ color: "pink" }}>"toilet"</Icon>
        <ListItemText primary="Potty" secondary={potty.dateTime} />
      </ListItem>
    </Link>
  );
};

const pottyListItems = props => (
  <div>
    <List>{map(li, props.potties)}</List>
  </div>
);

const mapStateToProps = state => {
  return {
    potties: compose()(state.potties)
  };
};

const connector = connect(mapStateToProps);

export default connector(pottyListItems);
