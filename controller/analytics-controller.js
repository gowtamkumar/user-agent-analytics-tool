const fs = require("fs").promises;
exports.analyticeData = async (req, res) => {
  const readdata = await fs.readFile("./user-agent.log", "utf8");
  const lines = readdata.split("\n").filter((l) => l.trim() !== "");
  const analyticsData = lines
    .map((line) => JSON.parse(line))
    .reduce((acc, curr) => {
      const agent = curr.userAgent.browser.name || curr.userAgent.ua;
      acc[agent] = (acc[agent] || 0) + 1;
      return acc;
    }, {});
  res.json(analyticsData);
};
