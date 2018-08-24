const NodeHTTPError = require("node-http-error");
const { getPotty, getPotties, postPotty } = require("../dal");
const { pathOr, propOr, isEmpty, not } = require("ramda");
const cleanObj = require("../lib/cleanObj");
const checkFields = require("../lib/checkFields");

const pottiesRoutes = app => {
  app.get("/potties", (req, res, next) => {
    const query = pathOr("", ["query", "filter"], req);

    getPotties(query)
      .then(potties => res.send(potties))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });

  app.get("/potties/:id", (req, res, next) => {
    const pottyId = pathOr("", ["params", "id"], req);
    getPotty(pottyId)
      .then(potty => res.status(200).send(potty))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });

  app.post("/potties", (req, res, next) => {
    const newPotty = propOr({}, "body", req);

    const missingFields = checkFields(["did1", "size2"], newPotty);

    if (not(isEmpty(missingFields))) {
      next(new NodeHTTPError(400, `missing fields: ${missingFields}`));
    }

    const finalObj = cleanObj(["did1", "size2"], newPotty);

    postPotty(finalObj)
      .then(addResult => {
        console.log(addResult);
        res.status(201).send(addResult);
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err));
      });
  });
};

module.exports = pottiesRoutes;
