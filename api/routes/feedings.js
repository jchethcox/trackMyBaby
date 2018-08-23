const NodeHTTPError = require("node-http-error");
const { getFeeding, getFeedings, postFeeding } = require("../dal");
const { pathOr, propOr, isEmpty, not } = require("ramda");
const cleanObj = require("../lib/cleanObj");
const checkFields = require("../lib/checkFields");

const feedingsRoutes = app => {
  app.get("/", (req, res) => res.send("Track My Baby"));

  app.get("/feedings", (req, res, next) => {
    const query = pathOr("", ["query", "filter"], req);

    getFeedings(query)
      .then(feeding => res.send(feedings))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });

  app.get("/feedings/:id", (req, res, next) => {
    const feedingId = pathOr("", ["params", "id"], req);
    getFeeding(feedingId)
      .then(feeding => res.status(200).send(feeding))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });

  app.post("/feedings", (req, res, next) => {
    const newFeeding = propOr({}, "body", req);

    const missingFields = checkFields(
      ["milkAmount", "formulaAmount", "feedingRating", "duration", "dateTime"],
      newFeeding
    );

    if (not(isEmpty(missingFields))) {
      next(new NodeHTTPError(400, `missing fields: ${missingFields}`));
    }

    const finalObj = cleanObj(
      ["milkAmount", "formulaAmount", "feedingRating", "duration", "dateTime"],
      newFeeding
    );

    postFeeding(finalObj)
      .then(addResult => {
        console.log(addResult);
        res.status(201).send(addResult);
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });
};

module.exports = feedingsRoutes;
