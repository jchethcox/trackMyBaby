const homeRoute = app => {
  app.get("/", (req, res) => res.send("Track My Baby"));
};

module.exports = homeRoute;
