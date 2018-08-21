const { compose, join, concat } = require("ramda");

module.exports = fields =>
  compose(
    concat("You are missing fields in your body. Check for: "),
    join(",")
  )(fields);
