import Image from 'next/image'
import React from 'react'

const Category = () => {
  return (
    <div className='flex flex-col gap-8 my-8 px-5'>
      <h1 className='text-black px-20 font-bold text-2xl'>Popular Category</h1>
      <div className='grid grid-cols-4 gap-4'>
        <div className='flex drop-shadow-lg flex-col gap-5 items-center'>
            <Image src='/breakfast.jpg' width={200} height={200} alt='recipe' className='rounded-full w-40 h-40'/>
            <h2 className='text-black font-semibold text-xl '>BreakFast</h2>
        </div>
        <div className='flex drop-shadow-lg flex-col gap-4 items-center'>
            <Image src='/lunch.jpg' width={200} height={200} alt='recipe' className='rounded-full w-40 h-40'/>
            <h2 className='text-black font-semibold text-xl '>Lunch</h2>
        </div>
        <div className='flex drop-shadow-lg flex-col gap-4 items-center'>
            <Image src='/dinner.jpg' width={200} height={200} alt='recipe' className='rounded-full w-40 h-40'/>
            <h2 className='text-black font-semibold text-xl '>Dinner</h2>
        </div>
        <div className='flex drop-shadow-lg flex-col gap-4 items-center'>
            <Image src='/salad.jpg' width={200} height={200} alt='recipe' className='rounded-full w-40 h-40'/>
            <h2 className='text-black font-semibold text-xl '>Salad</h2>
        </div>
        <div className='flex drop-shadow-lg flex-col gap-4 items-center'>
            <Image src='/sweets.jpg' width={200} height={200} alt='recipe' className='rounded-full w-40 h-40'/>
            <h2 className='text-black font-semibold text-xl '>Sweets</h2>
        </div>
        <div className='flex drop-shadow-lg flex-col gap-4 items-center'>
            <Image src='/pizza.jpg' width={200} height={200} alt='recipe' className='rounded-full w-40 h-40'/>
            <h2 className='text-black font-semibold text-xl '>Pizza</h2>
        </div>
        <div className='flex drop-shadow-lg flex-col gap-4 items-center'>
            <Image src='/drinks.jpg' width={200} height={200} alt='recipe' className='rounded-full w-40 h-40'/>
            <h2 className='text-black font-semibold text-xl '>Drinks</h2>
        </div>
        <div className='flex flex-col gap-4 items-center drop-shadow-lg'>
            <Image src='/appetizer.jpg' width={200} height={200} alt='recipe' className='rounded-full w-40 h-40'/>
            <h2 className='text-black font-semibold text-xl '>Appetizer</h2>
        </div>
      </div>
    </div>
  )
}

export default Category
