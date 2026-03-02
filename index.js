const express = require("express");
const app = express();
const path = require("path");
const {
  analyticsUserAgent,
} = require("./controller/analytics-user-agent-controller");
const { analyticeData } = require("./controller/analytics-controller");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.route("/analytics/user-agents").get(analyticsUserAgent);
app.route("/analytics/data").get(analyticeData);
app.get("/analytics", (req, res) => {
  res.render("analytics");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
