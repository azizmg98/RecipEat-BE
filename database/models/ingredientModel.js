const { Schema, model } = require("mongoose");

const IngredientSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = model("Ingredient", IngredientSchema);
