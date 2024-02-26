"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RecipeValidation from "@/lib/validations/recipe";
import { Recipe } from "@/lib/validations/recipe";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'sonner';
import ImageUpload from "../Add Recipe/ImageUpload";
import AddInput from "../Add Recipe/AddInput";
import { useUploadThing } from "@/lib/uploadthing";
import { createRecipe } from "@/lib/actions/recipe.action";
import { UploadFileResponse } from "uploadthing/client";
import { ImageType } from "@/types";


const RecipeForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Recipe>({
    resolver: zodResolver(RecipeValidation),
    defaultValues: {
      title: "",
      image: "",
      description: "",
      ingredients: [],
      instructions: [],
      servings: undefined,
      cookingTime: { prep: undefined, cook: undefined },
      prepareTime: { start: undefined, end: undefined },
      cuisine: "",
      collections: "",
      Calories: undefined,
    },
  });
  

  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [instructions, setInstructions] = useState<string[]>([""]);
 useEffect(() => {
  setValue("ingredients", ingredients);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [ingredients]);
 useEffect(() => { 
  setValue("instructions", instructions);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [instructions]);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res: UploadFileResponse<{ uploadedBy: string }>[]) => {
      if (res && res.length > 0 && res[0].url) {
        const fileUrl = res[0].url; 
       
        setValue("image", fileUrl);
        toast.success("Uploaded successfully!");
      } else {
        toast.error("Error: Unable to get file URL from upload response");
      }
    },
    onUploadProgress: (progress: number) => {
      if (progress < 99) {
        toast.loading( `Uploading: ${progress}%` ); // Update the progress toast
      } else {
        toast.dismiss(); 
      }
    },
    onUploadError: () => {
      toast.error("Error occurred while uploading");
    },

  });
  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };
  const handleRemoveIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };
  
  const handleAddInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const handleRemoveInstruction = (index: number) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  };

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const onSubmit: SubmitHandler<Recipe> = async (data) => {
    try {

      const recipeData = {
        title: data.title,
        image: data.image, 
        description: data.description,
        ingredients: data.ingredients,
        instructions: data.instructions,
        servings: data.servings,
        cookingTime: data.cookingTime,
        prepareTime: data.prepareTime,
        cuisine: data.cuisine,
        collections: data.collections,
        Calories: data.Calories,
      };
      
      await createRecipe(recipeData);
      
      toast.success("Recipe created successfully!");
      reset();
      setIngredients([""]);
      setInstructions([""]);
      setSelectedFile(null);
      router.push("/");
    } catch (error) {   
      toast.error("Error creating recipe. Please try again.");
    }
  };


  return (
    <>
      <form
        className="flex flex-col gap-4 items-center my-5 text-black font-medium"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="title">Recipe Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Write title"
            {...register("title")}
            className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="image">Recipe Image:</label>
          <ImageUpload onUpload={startUpload} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        </div>

        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            {...register("description")}
            placeholder="Introduce your recipe"
            className="w-full outline-none border-2 border-slate-300 rounded-lg p-2"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="ingredients">Ingredients:</label>
          <AddInput
            placeholder={"Add ingredients"}
            inputs={ingredients}
          onAddInput={handleAddIngredient}
          onRemoveInput={handleRemoveIngredient}
          onInputChange={handleIngredientChange}
           
          />
          {errors.ingredients && (
            <p className="text-red-500">{errors.ingredients.message}</p>
          )}
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="instructions">Instructions:</label>
          <AddInput
            placeholder={"Write Instructions"}
            inputs={instructions}
          onAddInput={handleAddInstruction}
          onRemoveInput={handleRemoveInstruction}
          onInputChange={handleInstructionChange}
          />
          {errors.instructions && (
            <p className="text-red-500">{errors.instructions.message}</p>
          )}
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            {...register("servings", { valueAsNumber: true })}
            placeholder="#"
            className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
          />
          {errors.servings && (
            <p className="text-red-500">{errors.servings.message}</p>
          )}
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label>Cooking Time:</label>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Hours 0"
              className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
              {...register("cookingTime.prep", { valueAsNumber: true })}
            />
            <input
              type="number"
              placeholder="Minutes 0"
              className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
              {...register("cookingTime.cook", { valueAsNumber: true })}
            />
            {errors.cookingTime && (
              <p className="text-red-500">{errors.cookingTime.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label>Prep Time:</label>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="start 0"
              {...register("prepareTime.start", { valueAsNumber: true })}
              className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
            />
            <input
              type="number"
              placeholder="end 0"
              {...register("prepareTime.end", { valueAsNumber: true })}
              className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
            />
            {errors.prepareTime && (
              <p className="text-red-500">{errors.prepareTime.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="cuisine">Cuisine:</label>
          <input
            type="text"
            id="cuisine"
            {...register("cuisine")}
            className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
          />
          {errors.cuisine && (
            <p className="text-red-500">{errors.cuisine.message}</p>
          )}
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="collections">Collections:</label>
          <input
            type="text"
            id="collections"
            {...register("collections")}
            className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
          />
          {errors.collections && (
            <p className="text-red-500">{errors.collections.message}</p>
          )}
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="collections">Calories:</label>
          <input
            type="number"
            id="Calories"
            {...register("Calories", { valueAsNumber: true })}
            className="w-full border-2 border-slate-300 rounded-lg outline-none p-2"
          />
          {errors.collections && (
            <p className="text-red-500">{errors.Calories?.message}</p>
          )}
        </div>
        <button
          className="bg-main px-5 py-2 my-5 w-1/3 rounded-lg font-semibold"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
};



export default RecipeForm;
