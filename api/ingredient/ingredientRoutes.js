const express = require("express");
const { getIngredient, createIngredient } = require("./ingredientController");

const ingredientRouter = express.Router();

ingredientRouter.get("/", getIngredient);
ingredientRouter.post("/", createIngredient);

module.exports = ingredientRouter;
