const Recipe = require("../../database/models/Recipe");

exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.find().populate("ingredients", ["name"]);
    return res.json(recipe);
  } catch (error) {
    next(error);
  }
};

exports.recipeDelete = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    await Recipe.findByIdAndDelete(recipeId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
