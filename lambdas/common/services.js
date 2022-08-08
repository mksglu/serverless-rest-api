const AWS = require("aws-sdk");

// DynamoDB
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
  dynamoDbClient,
};
