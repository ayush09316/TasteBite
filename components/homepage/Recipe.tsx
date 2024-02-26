import React from 'react'
import Image from 'next/image'
import RecipeCard from './RecipeCard'

const Recipe = () => {
  return (
    <div className='flex flex-col '>
     <div className='flex justify-around my-4 gap-8 items-center'>
        <Image src='/recipe.svg' width={400} height={400} alt='recipe' className='rounded-xl border-2 border-slate-400'/>
        <div className='flex flex-col gap-4'>
        <h1 className='text-5xl font-bold  leading-[4rem] text-black'>Share Your Recipes
        </h1>
        <p className='max-w-[25rem] text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aperiam ipsum ut temporibus eos mollitia laborum
        </p>
        <button className='bg-main px-6 py-2 rounded-md shadow-sm hover:shadow-md w-fit'>Create New Recipe</button>
      </div>
      
     </div>
     <div className='bg-slate-200 py-4 px-28 my-8 flex flex-col items-center gap-8 '>
      <h1 className='text-2xl font-bold text-black'>Explore Recipes</h1>
      <div className='grid grid-cols-4 gap-x-20 gap-y-12'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard /> 
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
     </div>
    </div>
  )
}

export default Recipe
