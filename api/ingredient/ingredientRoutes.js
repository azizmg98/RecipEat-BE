const express = require("express");
const { getIngredient } = require("./ingredientController");

const ingredientRouter = express.Router();

ingredientRouter.get("/", getIngredient);

module.exports = ingredientRouter;
