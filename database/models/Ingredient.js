const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const IngredientSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    image: String,
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipes" }],
  },
  { timestamps: true }
);

module.exports = model("Ingredient", IngredientSchema);
