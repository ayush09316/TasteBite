"use client"
import RecipeCard from '@/components/homepage/RecipeCard'
import { getAllRecipe } from '@/lib/actions/recipe.action';
import { recipeProps } from '@/types';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Page =() => {
  const [recipes, setRecipes] = useState<recipeProps[]>([]);
  const [loading, setLoading] = useState(true); // 

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const fetchedRecipes = await getAllRecipe();
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        alert("Failed to fetch recipes");
      } finally {
         setLoading(false); 
      }
    };
    fetchRecipes();
  }, []); 

  // Render loading indicator if loading is true
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-prim ">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-4 gap-x-20 gap-y-12 bg-prim py-10 mx-20'>
      {recipes?.map((recipe: recipeProps) => (
        <Link key={recipe._id} href={`/recipe/${recipe?._id}`} >
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  )
}

export default Page
