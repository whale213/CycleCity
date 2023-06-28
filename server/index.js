const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Simple Route
app.get("/", (req, res) => {
  res.send("CycleCity server is running...");
});

// Routes
const locationRoute = require("./routes/location");
app.use("/location", locationRoute);

const attractionRoute = require("./routes/attraction");
app.use("/attraction", attractionRoute);

const userRoute = require("./routes/user");
app.use("/user", userRoute);

const criteriaRoute = require("./routes/Criteria");
app.use("/criteria", criteriaRoute);

const leagueRoute = require("./routes/League");
app.use("/league", leagueRoute);

const questRoute = require("./routes/Quest");
app.use("/quest", questRoute);

const missionRoute = require("./routes/Mission");
app.use("/mission", missionRoute);

const userMissionRoute = require("./routes/UserMission");
app.use("/UserMission", userMissionRoute);

const userQuestRoute = require("./routes/UserQuest");
app.use("/UserQuest", userQuestRoute);

const pelotonRoute = require("./routes/peloton");
app.use("/peloton", pelotonRoute);

// synchronizes data models with db tables
const db = require("./models");
db.sequelize
  .sync({ alter: true })
  .then(() => {
    let port = process.env.APP_PORT;
    app.listen(port, () => {
      console.log(`⚡ Sever running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
