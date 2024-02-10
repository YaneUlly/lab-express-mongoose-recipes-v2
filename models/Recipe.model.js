// Your code here ...
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
  title: String,
  instructions: { type: String, required: true },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
  },
  ingredientes: [String],
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg',
  },
  duration: { type: Number, min: 0 },
  isArchived: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
