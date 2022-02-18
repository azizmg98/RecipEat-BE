const express = require("express");
const { getRecipe, recipeDelete } = require("./recipeControllers");

const recipeRouter = express.Router();

recipeRouter.get("/", getRecipe);
recipeRouter.delete("/:recipeId", recipeDelete);

module.exports = recipeRouter;
