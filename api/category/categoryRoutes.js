const express = require("express");
const {
  categoryGet,
  categoryCreate,
  categoryDelete,
  recipeCreate,
} = require("./categoryControllers");

const categoryRouter = express.Router();

categoryRouter.get("/", categoryGet);
categoryRouter.post("/", categoryCreate);
categoryRouter.delete("/:categoryId", categoryDelete);
categoryRouter.post("/:categoryId/recipes", recipeCreate);

module.exports = categoryRouter;
