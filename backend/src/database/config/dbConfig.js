const mongoose = require("mongoose");
require("dotenv").config();

const DB_LOGIN = process.env.DB_LOGIN;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.chlgaa2.mongodb.net/annotations?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((error) => {
    console.log(error);
  });
