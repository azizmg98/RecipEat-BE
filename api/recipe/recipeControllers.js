const Recipe = require("../../database/models/Recipe")

exports.getRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.find()
    return res.json(recipe)
    } catch (error) {
        next(error)
    }
}