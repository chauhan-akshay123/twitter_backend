const express = require("express");
const { connectDb } = require("./config/database");
const app = express();

const Tweet = require("./models/tweet");

app.listen(3000, async () => {
  console.log(`Server started`);
  await connectDb();
});