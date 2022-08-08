const app = require("../common/app");
const serverless = require("serverless-http");

app.delete("/todo/:todoId", async function (req, res) {
  return res.json("//TODO: deleteTodo");
});

module.exports.handler = serverless(app);