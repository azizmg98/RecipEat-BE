const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    image: String,
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
    directions: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = model("Recipe", RecipeSchema);
