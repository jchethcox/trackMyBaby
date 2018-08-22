require("dotenv").config();
const PouchDB = require("pouchdb-core");
PouchDB.plugin(require("pouchdb-adapter-http"));

const db = new PouchDB(
  `${process.env.COUCHDB_SERVER}${process.env.COUCHDB_DBNAME}`
);
db.bulkDocs([
  {
    name: "Basic Needs Assistance",
    shortName: "Basic Needs Assistance",
    desc:
      "Includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship.",
    shortDesc: "Shelter, safety, food, financial assistance",
    icon: "check_circle",
    type: "category",
    _id: "category_basic-needs-assistance"
  },
  {
    name: "Benefits",
    shortName: "Benefits",
    desc:
      "Benefits include federal, state, and local agencies that assist veterans and their families in filing for claims to receive benefits earned as a result of military service.",
    shortDesc: "Claims assistance for benefits recipients",
    icon: "attach_money",
    type: "category",
    _id: "category_benefits"
  },
  {
    name: "College Education/Vocational Certification",
    shortName: "Education and Training",
    desc:
      "College Education/Vocational Certification includes programs that assist current and retired military members to enterinstitutions of higher educationand to obtain additionalspecialized training or certification necessary for part-time and/or full-time employment.",
    shortDesc: "Education and training opportunities",
    icon: "school",
    type: "category",
    _id: "category_education-and-training"
  }
])
  .then(result => console.log("Documents successfully uploaded!", result))
  .catch(err => console.log("Error uploading documents", err));
