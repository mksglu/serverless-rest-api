const app = require("../common/app");
const serverless = require("serverless-http");
const { TABLE_NAME } = require("../common/configs");
const { dynamoDbClient } = require("../common/services");

app.get("/todo/:todoId", async function (req, res) {
  console.log(req.params);
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: req.params.todoId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { todo, completed, id } = Item;
      res.json({ todo, completed, id });
    } else {
      res.status(404).json({ error: 'Could not find todo with provided "todoId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive todo" });
  }
});

module.exports.handler = serverless(app);
