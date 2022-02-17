const Category = require("../../database/models/Category");

exports.categoryGet = async (req, res, next) => {
  try {
    const product = await Category.find();
    return res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res, next) => {
  try {
    const category = req.body;
    const addCategory = await Category.create(category);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};
