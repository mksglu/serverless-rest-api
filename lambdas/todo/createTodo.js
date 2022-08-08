const app = require("../common/app");
const { v4: uuidv4 } = require("uuid");
const { TABLE_NAME } = require("../common/configs");
const { dynamoDbClient } = require("../common/services");
const serverless = require("serverless-http");

app.post("/todo", async function (req, res) {
  const { todo } = req.body;

  const params = {
    TableName: TABLE_NAME,
    Item: { todo, id: uuidv4(), completed: false },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create todo" });
  }
});

module.exports.handler = serverless(app);
