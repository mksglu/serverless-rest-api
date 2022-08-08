const app = require("../common/app");
const serverless = require("serverless-http");

app.put("/todo/:todoId", async function (req, res) {
  return res.json("//TODO: updateTodo");
});

module.exports.handler = serverless(app);