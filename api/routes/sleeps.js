const NodeHTTPError = require("node-http-error");
const { getSleep, getSleeps, postSleep } = require("../dal");
const { pathOr, propOr, isEmpty, not } = require("ramda");
const cleanObj = require("../lib/cleanObj");
const checkFields = require("../lib/checkFields");

const sleepsRoutes = app => {
  app.get("/sleeps", (req, res, next) => {
    const query = pathOr("", ["query", "filter"], req);

    getSleeps(query)
      .then(sleep => res.send(sleep))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });

  app.get("/sleeps/:id", (req, res, next) => {
    const sleepId = pathOr("", ["params", "id"], req);
    getSleep(sleepId)
      .then(sleep => res.status(200).send(sleep))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });

  app.post("/sleeps", (req, res, next) => {
    const newSleep = propOr({}, "body", req);

    const missingFields = checkFields(
      ["type", "duration", "sleepRating", "dateTime"],
      newSleep
    );

    if (not(isEmpty(missingFields))) {
      next(new NodeHTTPError(400, `missing fields: ${missingFields}`));
    }

    const finalObj = cleanObj(
      ["type", "duration", "sleepRating", "dateTime"],
      newSleep
    );
    postSleep(finalObj)
      .then(addResult => {
        console.log(addResult);
        res.status(201).send(addResult);
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });
};

module.exports = sleepsRoutes;
