const express = require("express");
const {getRecipe} = require("./recipeControllers")

const recipeRouter = express.Router();

recipeRouter.get("/", getRecipe);

module.exports = recipeRouter;
