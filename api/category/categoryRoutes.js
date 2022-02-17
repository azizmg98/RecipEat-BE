const express = require("express");
const { categoryGet, categoryCreate } = require("./categoryControllers");

const categoryRouter = express.Router();

categoryRouter.get("/", categoryGet);
categoryRouter.post("/", categoryCreate);

module.exports = categoryRouter;
