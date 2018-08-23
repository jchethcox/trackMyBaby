const PouchDB = require("pouchdb-core");
PouchDB.plugin(require("pouchdb-adapter-http"));
const {
  merge,
  split,
  not,
  isEmpty,
  filter,
  propOr,
  contains
} = require("ramda");

const COUCHDB_SERVER = process.env.COUCHDB_SERVER;
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME;
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`;

const db = new PouchDB(DB_URL);
const { getAllDocs } = require("./dal-helper");

const getFeedings = query => {
  const [key, value] = not(isEmpty(query)) ? split(":", query) : ["", ""];
  return getAllDocs(db, {
    include_docs: true,
    startkey: "feeding_",
    endkey: "feeding_\ufff0"
  }).then(
    feedings =>
      isEmpty(query)
        ? feedings
        : filter(feeding => contains(value, propOr("", key, feeding)), feedings)
  );
};

const getFeeding = id => db.get(id);

const postFeeding = feeding => {
  const modifiedFeeding = merge(feeding, {
    _id: ("feeding_", feeding.dateTime),
    type: "feeding"
  });
  return db.put(modifiedFeeding);
};

const getPotties = query => {
  const [key, value] = not(isEmpty(query)) ? split(":", query) : ["", ""];
  return getAllDocs(db, {
    include_docs: true,
    startkey: "potty_",
    endkey: "potty_\ufff0"
  }).then(
    potties =>
      isEmpty(query)
        ? potties
        : filter(potty => contains(value, propOr("", key, potty)), potties)
  );
};

const getPotty = id => db.get(id);

const postPotty = potty => {
  const modifiedPotty = merge(potty, {
    _id: ("potty_", potty.dateTime),
    type: "potty"
  });
  return db.put(modifiedPotty);
};

const getSleeps = query => {
  const [key, value] = not(isEmpty(query)) ? split(":", query) : ["", ""];
  return getAllDocs(db, {
    include_docs: true,
    startkey: "sleep_",
    endkey: "sleep_\ufff0"
  }).then(
    sleeps =>
      isEmpty(query)
        ? sleeps
        : filter(sleep => contains(value, propOr("", key, sleep)), sleeps)
  );
};

const getSleep = id => db.get(id);

const postSleep = sleep => {
  const modifiedSleep = merge(sleep, {
    _id: ("sleep_", sleep.dateTime),
    type: "sleep"
  });
  return db.put(modifiedSleep);
};

module.exports = {
  getFeeding,
  getFeedings,
  postFeeding,
  getPotty,
  getPotties,
  postPotty,
  getSleep,
  getSleeps,
  postSleep
};
