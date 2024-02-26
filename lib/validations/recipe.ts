import { z } from "zod";


const RecipeValidation = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  image: z.string().url({ message: "Image must be a valid URL" }),
  
 
  description: z.string().min(1, { message: "Description is required" }),
  ingredients: z.array(z.string()).min(1, { message: "At least one ingredient is required" }),
  instructions:  z.array(z.string()).min(1, { message: "At least one instruction is required" }),
  
  servings: z.number().min(1, { message: "Servings must be at least 1" }),
  cookingTime: z.object({
    prep: z.number().min(0, { message: "Prep time must be a non-negative number" }),
    cook: z.number().min(0, { message: "Cooking time must be a non-negative number" }),
  }),
  prepareTime: z.object({
    start: z.number(),
    end: z.number(),
  }),
  cuisine: z.string().min(1, { message: "Cuisine is required" }),
  collections: z.string().min(1, {
    message: "At least one collection must be selected",
  }),
  Calories: z.number().min(0, { message: "Calories must be a non-negative number" }),
});

export default RecipeValidation;

export type Recipe = z.infer<typeof RecipeValidation>;
