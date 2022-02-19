const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const IngredientSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipes" }],
  },
  { timestamps: true }
);

module.exports = model("Ingredient", IngredientSchema);
