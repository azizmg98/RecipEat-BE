const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    recipes: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
  },
  { timestamps: true }
);

CategorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = model("Category", CategorySchema);
