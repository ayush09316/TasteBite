
import { z } from "zod";

export type ImageType = string[];





  const IngredientStringSchema = z.string().min(1, { message: "Name is required" });
const IngredientArraySchema = z.array(IngredientStringSchema);

const InstructionStringSchema = z.string().min(1, { message: "Description is required" });
const InstructionArraySchema = z.array(InstructionStringSchema);

export const IngredientSchema = z.union([IngredientStringSchema, IngredientArraySchema]).refine(
  value => Array.isArray(value) ? value.length >= 1 : true, 
  { 
    message: "", 
    path: ["ingredients"] 
  }
);
export const InstructionSchema = z.union([InstructionStringSchema, InstructionArraySchema]).refine(
  value => Array.isArray(value) ? value.length >= 1 : true, 
  { 
    message: "", 
    path: ["instructions"] 
  }
);

export interface recipeProps {
  _id: string;
  title: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  servings: number;
  cookingTime: { prep: number; cook: number };
  prepareTime: { start: number; end: number };
  cuisine: string;
  collections: string;
  Calories: number;
}



type startUploadType = (files: File[], input?: undefined) => Promise<{
  name: string;
  size: number;
  key: string;
  serverData: {
      uploadedBy: string;
  };
  url: string;
}[] | undefined>;
export interface ImageUploadProps {
  onUpload: startUploadType;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
}