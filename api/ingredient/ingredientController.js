const Ingredient = require("../../database/models/Ingredient");

exports.getIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.find();
    return res.json(ingredient);
  } catch (error) {
    next(error);
  }
};
