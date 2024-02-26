"use server"
import { connectToDB } from "../mongoose";
import Recipe from "@/lib/models/recipe.model";



type Params = {
  title: string;
  image: string;
  description: string;
  ingredients: string | string[];
  instructions: string | string[];
  servings: number;
  cookingTime: { prep: number; cook: number };
  prepareTime: { start: number; end: number };
  cuisine: string;
  collections: string;
  Calories: number;
};

export async function createRecipe({
  title,
  image,
  description,
  ingredients,
  instructions,
  servings,
  cookingTime,
  prepareTime,
  cuisine,
  collections,
  Calories,
}: Params) {
  try {
    // Connect to the database
    connectToDB();

    
    // Create a new recipe document
    const newRecipe = await Recipe.create({
      title,
      image,
      description,
      ingredients,
      instructions,
      servings,
      cookingTime,
      prepareTime,
      cuisine,
      collections,
      Calories,
    });

   

  } catch (error: any) {
    // Handle specific types of errors separately
    if (error.name === "ValidationError") {
      throw new Error(`Validation error: ${error.message}`);
    } else {
      // Handle other types of errors (e.g., database connection issues)
      throw new Error(`Failed to create recipe: ${error.message}`);
    }
  }
}

export async function getAllRecipe() {
  try {
    // Connect to the database
    connectToDB();

    // Fetch all recipes from the database
    const recipes = await Recipe.find();
    const data= JSON.parse(JSON.stringify(recipes));
    
    
    return data;
  } catch (error: any) {
    // Handle other types of errors (e.g., database connection issues)
    throw new Error(`Failed to fetch recipes: ${error.message}`);
  }
}

export async function getRecipeById(id: string) {
  try {
    connectToDB();
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      throw new Error(`Recipe not found`);
    }
    return recipe;
  } catch (error:any) {
    throw new Error(`Failed to fetch recipe: ${error.message}`);
  }
}
