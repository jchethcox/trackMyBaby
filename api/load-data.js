require("dotenv").config();

const PouchDB = require("pouchdb-core");
PouchDB.plugin(require("pouchdb-adapter-http"));

const db = new PouchDB(
  `${process.env.COUCHDB_SERVER}${process.env.COUCHDB_DBNAME}`
);

const data = [
  {
    _id: "feeding_2018-08-24T12:14:00",
    type: "feeding",
    milkAmount: 2,
    formulaAmount: 2,
    feedingRating: 2,
    duration: 8,
    dateTime: "2018-08-24T12:14:00"
  },
  {
    _id: "feeding_2018-08-24T09:00:00",
    type: "feeding",
    milkAmount: 4,
    formulaAmount: 0,
    feedingRating: 2,
    duration: 12,
    dateTime: "2018-08-24T09:00:00"
  },
  {
    _id: "feeding_2018-08-24T07:15:00",
    type: "feeding",
    milkAmount: 0,
    formulaAmount: 2,
    feedingRating: 1,
    duration: 7,
    dateTime: "2018-08-24T07:15:00"
  },
  {
    _id: "feeding_2018-08-23T23:27:00",
    type: "feeding",
    milkAmount: 0,
    formulaAmount: 2,
    feedingRating: 0,
    duration: 4,
    dateTime: "2018-08-23T23:27:00"
  },
  {
    _id: "feeding_2018-08-23T19:12:00",
    type: "feeding",
    milkAmount: 2,
    formulaAmount: 2,
    feedingRating: 2,
    duration: 9,
    dateTime: "2018-08-23T19:12:00"
  },
  {
    _id: "feeding_2018-08-23T15:36:00",
    type: "feeding",
    milkAmount: 0,
    formulaAmount: 4,
    feedingRating: 1,
    duration: 14,
    dateTime: "2018-08-23T15:36:00"
  },
  {
    _id: "feeding_2018-08-23T11:47:00",
    type: "feeding",
    milkAmount: 4,
    formulaAmount: 0,
    feedingRating: 2,
    duration: 11,
    dateTime: "2018-08-23T11:47:00"
  },
  {
    _id: "feeding_2018-08-23T07:32:00",
    type: "feeding",
    milkAmount: 2,
    formulaAmount: 2,
    feedingRating: 1,
    duration: 9,
    dateTime: "2018-08-23T07:32:00"
  },
  {
    _id: "feeding_2018-08-22T22:36:00",
    type: "feeding",
    milkAmount: 2,
    formulaAmount: 2,
    feedingRating: 1,
    duration: 7,
    dateTime: "2018-08-22T22:36:00"
  },
  {
    _id: "feeding_2018-08-22T18:22:00",
    type: "feeding",
    milkAmount: 0,
    formulaAmount: 2,
    feedingRating: 0,
    duration: 11,
    dateTime: "2018-08-22T18:22:00"
  },
  {
    _id: "feeding_2018-08-22T14:39:00",
    type: "feeding",
    milkAmount: 2,
    formulaAmount: 2,
    feedingRating: 2,
    duration: 8,
    dateTime: "2018-08-22T14:39:00"
  },
  {
    _id: "feeding_2018-08-22T11:32:00",
    type: "feeding",
    milkAmount: 2,
    formulaAmount: 3,
    feedingRating: 2,
    duration: 14,
    dateTime: "2018-08-22T11:32:00"
  },
  {
    _id: "feeding_2018-08-22T08:22:00",
    type: "feeding",
    milkAmount: 0,
    formulaAmount: 4,
    feedingRating: 1,
    duration: 11,
    dateTime: "2018-08-22T08:22:00"
  },
  ///////////////////////////////////////////////
  {
    _id: "potty_2018-08-24T11:11:00",
    type: "potty",
    did1: true,
    size2: 1,
    dateTime: "2018-08-24T11:11:00"
  },
  {
    _id: "potty_2018-08-24T08:23:00",
    type: "potty",
    did1: true,
    size2: 0,
    dateTime: "2018-08-24T08:23:00"
  },
  {
    _id: "potty_2018-08-23T23:19:00",
    type: "potty",
    did1: true,
    size2: 2,
    dateTime: "2018-08-24T23:19:00"
  },
  {
    _id: "potty_2018-08-23T19:11:00",
    type: "potty",
    did1: false,
    size2: 1,
    dateTime: "2018-08-23T19:11:00"
  },
  {
    _id: "potty_2018-08-23T20:27:00",
    type: "potty",
    did1: true,
    size2: 0,
    dateTime: "2018-08-23T20:27:00"
  },
  {
    _id: "potty_2018-08-23T16:42:00",
    type: "potty",
    did1: true,
    size2: 1,
    dateTime: "2018-08-23T16:42:00"
  },
  {
    _id: "potty_2018-08-23T11:36:00",
    type: "potty",
    did1: false,
    size2: 2,
    dateTime: "2018-08-23T11:36:00"
  },
  {
    _id: "potty_2018-08-23T08:07:00",
    type: "potty",
    did1: true,
    size2: 0,
    dateTime: "2018-08-24T08:07:00"
  },
  {
    _id: "potty_2018-08-23T02:41:00",
    type: "potty",
    did1: true,
    size2: 0,
    dateTime: "2018-08-23T02:41:00"
  },
  {
    _id: "potty_2018-08-22T23:11:00",
    type: "potty",
    did1: true,
    size2: 1,
    dateTime: "2018-08-22T23:11:00"
  },
  {
    _id: "potty_2018-08-22T19:17:00",
    type: "potty",
    did1: true,
    size2: 0,
    dateTime: "2018-08-22T19:17:00"
  },
  {
    _id: "potty_2018-08-22T15:37:00",
    type: "potty",
    did1: false,
    size2: 2,
    dateTime: "2018-08-22T15:37:00"
  },
  {
    _id: "potty_2018-08-22T12:14:00",
    type: "potty",
    did1: true,
    size2: 1,
    dateTime: "2018-08-22T12:14:00"
  },
  {
    _id: "potty_2018-08-22T08:47:00",
    type: "potty",
    did1: false,
    size2: 1,
    dateTime: "2018-08-22T08:47:00"
  },
  /////////////////////////////////////////////
  {
    _id: "sleep_2018-08-24T11:16:00",
    type: "sleep",
    duration: 2,
    sleepRating: 2,
    dateTime: "2018-08-24T11:16:00"
  },
  {
    _id: "sleep_2018-08-23T22:36:00",
    type: "sleep",
    duration: 7,
    sleepRating: 1,
    dateTime: "2018-08-23T22:36:00"
  },
  {
    _id: "sleep_2018-08-23T16:16:00",
    type: "sleep",
    duration: 1.5,
    sleepRating: 2,
    dateTime: "2018-08-23T16:16:00"
  },
  {
    _id: "sleep_2018-08-23T10:33:00",
    type: "sleep",
    duration: 1,
    sleepRating: 1,
    dateTime: "2018-08-23T10:33:00"
  },
  {
    _id: "sleep_2018-08-22T23:31:00",
    type: "sleep",
    duration: 8.5,
    sleepRating: 2,
    dateTime: "2018-08-22T23:31:00"
  },
  {
    _id: "sleep_2018-08-22T14:29:00",
    type: "sleep",
    duration: 2.25,
    sleepRating: 0,
    dateTime: "2018-08-22T13:29:00"
  },
  {
    _id: "sleep_2018-08-22T11:01:00",
    type: "sleep",
    duration: 1.75,
    sleepRating: 2,
    dateTime: "2018-08-22T11:01:00"
  }
];
db.bulkDocs(data)
  .then(result => console.log("Documents successfully uploaded!", result))
  .catch(err => console.log("Error uploading documents", err));
