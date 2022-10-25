const express = require('express');
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes/Routes.js');

const database = "mongodb+srv://salman:salman@cluster0.gzlgnuh.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(database, {
  useNewUrlParser : true
})

mongoose.connection.on("connected", () => {
  console.log("Database Conneted");
})

mongoose.connection.on("error", () => {
  console.log("Some internal error occured in the database!", err);
})

app.use("/", routes);

app.listen(3002, () => {
  console.log("Server started!");
})
