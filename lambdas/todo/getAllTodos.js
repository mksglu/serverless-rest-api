const app = require("../common/app");
const serverless = require("serverless-http");
const { dynamoDbClient } = require("../common/services");
const { TABLE_NAME } = require("../common/configs");

app.get("/todo/all", async function (req, res) {
  const params = {
    TableName: TABLE_NAME,
 
  };

  try {
    const { Items } = await dynamoDbClient.scan(params).promise();
    res.json(Items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive all todos" });
  }
});

module.exports.handler = serverless(app);
