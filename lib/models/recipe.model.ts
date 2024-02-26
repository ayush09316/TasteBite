import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String], // Allow for either a string or an array of strings
    required: true
  },
  instructions: {
    type: [String],
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  cookingTime: {
    prep: {
      type: Number,
      required: true
    },
    cook: {
      type: Number,
      required: true
    }
  },
  prepareTime: {
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    }
  },
  cuisine: {
    type: String,
    required: true
  },
  collections: {
    type: String,
    required: true
  },
  Calories:{
    type: Number,
    required: true
  }
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
