require("dotenv").config();
const PORT = process.env.PORT;
const app = require("express")();
const bodyParser = require("body-parser");

const feedings = require("./routes/feedings");
const potties = require("./routes/potties");
const sleeps = require("./routes/sleeps");

const cors = require("cors");

app.use(bodyParser.json());
app.use(cors({ credentials: true }));

feedings(app);
potties(app);
sleeps(app);

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

app.use((err, req, res, next) => {
  console.log("error", err);
  next(err);
});

app.listen(PORT || 5000, () => console.log("Up on", PORT || 5000));
