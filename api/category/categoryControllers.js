const Category = require("../../database/models/Category");
const { findByIdAndDelete } = require("../../database/models/Recipe");
const Recipe = require("../../database/models/Recipe");

exports.categoryGet = async (req, res, next) => {
  try {
    const product = await Category.find().populate("recipes", "name");
    return res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res, next) => {
  try {
    const category = req.body;
    const addCategory = await Category.create(category);
    res.status(201).json(addCategory);
  } catch (error) {
    next(error);
  }
};

exports.categoryDelete = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    await Category.findByIdAndDelete(categoryId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.recipeCreate = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    console.log(categoryId);
    req.body.category = categoryId;
    const newRecipe = await Recipe.create(req.body);
    await Category.findByIdAndUpdate(categoryId, {
      $push: { recipes: newRecipe._id },
    });
    return res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
