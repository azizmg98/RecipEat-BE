const Ingredient = require("../../database/models/ingredientModel")

exports.getIngredient = async (req, res, next) => {
    try {
        const ingredient = await Ingredient.find()
    return res.json(ingredient);
    } catch (error) {
        next(error)
    }
}