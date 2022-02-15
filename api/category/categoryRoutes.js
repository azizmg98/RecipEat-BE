const express = require("express");
const { getCategory } = require("./categoryControllers");

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);

module.exports = categoryRouter;
