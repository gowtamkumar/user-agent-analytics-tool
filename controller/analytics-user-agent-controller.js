const fs = require("fs").promises;
const UAParser = require("ua-parser-js");
function detectAgent(userAgent) {
  const parser = new UAParser(userAgent);
  const result = parser.getResult();
  return result;
}
exports.analyticsUserAgent = async function analyticsUserAgent(req, res) {
  const userAgent = req.headers["user-agent"];
  const data = {
    userAgent: detectAgent(userAgent),
    ip: req.ip,
    time: new Date().toISOString(),
  };

  await fs.appendFile("./user-agent.log", JSON.stringify(data) + "\n");
  res.send("User agetn data save!");
};
