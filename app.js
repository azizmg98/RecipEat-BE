const express = require("express");
const connectDB = require("./database/DB");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("recipes", recipeRouter);
app.use("ingredients", ingredientRouter);
app.use("categories", categoryRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  connectDB();
});
