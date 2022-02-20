const Ingredient = require("../../database/models/Ingredient");

exports.getIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.find();
    return res.json(ingredient);
  } catch (error) {
    next(error);
  }
};
  exports.createIngredient = async (req, res, next) => {
    try {
      const ingredient = req.body;
      const addIngredient = await Ingredient.create(ingredient);
      res.status(201).json(addIngredient);
    } catch (error) {
      next(error);
    }
  };
