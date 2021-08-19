require('dotenv').config()

const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connect = mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
connect
  .then((db) => {
    console.log("Connected to Database Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.APP_PORT
}