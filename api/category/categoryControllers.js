const Category = require("../../database/models/Category");

exports.getCategory = async (req, res, next) => {
  try {
    const product = await Category.find();
    return res.json(product);
  } catch (error) {
    next(error);
  }
};
