"use client"
import Rating from "@/components/utility/Rating";
import Image from "next/image";
import { LuPrinter } from "react-icons/lu";
import { FaUserCircle,FaCalendarAlt,FaCommentDots,FaBookmark,FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { recipeProps } from "@/types";
import { getRecipeById } from "@/lib/actions/recipe.action";
import { toast } from "sonner";

type Params = {
  params:{
    id: string;
  }
}

const Page = ({params:{id}}: Params) => {
  const [recipes, setRecipes] = useState<recipeProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<string>('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true); // Set loading to true when starting to fetch data
        const fetchedRecipes = await getRecipeById(id);
        setRecipes(fetchedRecipes);
        console.log(fetchedRecipes);
        
      } catch (error) {
        console.error("Error fetching recipes:", error);
        alert("Failed to fetch recipes");
      } finally {
        setLoading(false); // Set loading to false whether the fetch is successful or not
      }
    };
    fetchRecipes();
  }, [id]);
  
  const handlePost = (e: any) => {
    e.preventDefault();
    if (post === '') {
      return toast.error('Please write a review');
    }
    setPost('');
    toast.success('Your review has been posted successfully');
  }

  return (
    <>
    {
      loading ? (
        <div className="flex justify-center items-center h-screen bg-prim ">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      ) : (
        <div className="flex flex-col gap-4 px-[8rem] bg-prim mt-4 relative">
      <div className="flex flex-col gap-2 text-black">
      <h1 className="text-3xl font-semibold">{recipes?.title}</h1>
      <div className="flex justify-between">
       <div className="flex gap-3 text-[12px]">
       <span className="flex gap-2 items-center">
          <FaUserCircle size={20} color={'#FF642F'} />
          <p>Author name</p>
        </span>
        <span className="flex gap-2 items-center">
          <FaCalendarAlt size={20} color={'#FF642F'} />
          <p>Calender</p>
        </span>
        <span className="flex gap-2 items-center">
          <FaCommentDots size={20} color={'#FF642F'} />
          <p>Comment</p>
        </span>
        <span className="flex gap-2 items-center">
          <FaBookmark size={20} color={'#FF642F'} />
          <p>Author name</p>
        </span>
        <span className="flex gap-2 items-center">
          <Rating count={5} size={18} color2={'#ffd700'} />
          <p>4.0/10 Reviews</p>
        </span>
       </div>
       <div className="flex gap-4 justify-center items-center">
        <span className="border-2 p-1 rounded-md border-slate-300">
          <FaBookmark size={20} color={'#FF642F'} />
        </span>
        <FaShareAlt size={20} color={'#FF642F'} />
       </div>
      </div>
      <hr className="text-slate-400"/>
      </div>
      <div className="w-[1px] h-[40%] bg-slate-300 absolute top-[32%] right-[33%]"/>
      <div className="flex justify-between gap-20">
      <section className="flex gap-4 flex-col ">
        <div>
          <Image src={recipes?.image ?? ''} width={300} height={300} alt='recipe' className="w-[50rem] h-[30rem] object-fill rounded-xl" />
          <div className="grid grid-cols-4 divide-x  font-medium mt-4 ">
            <span className="flex flex-col items-center">
              <p>Prep time</p>
              <p>
                {recipes?.prepareTime.start !==0 ? `${recipes?.prepareTime.start} h - ` : null}
                { recipes?.prepareTime.end !==0 ? `${recipes?.prepareTime.end} min`: null}
              </p>
            </span>
            <span className="flex flex-col items-center">
              <p>Cook time</p>
              <p>
                {recipes?.cookingTime.prep !==0 ? `${recipes?.cookingTime.prep} h - ` : null}
                { recipes?.cookingTime.cook !==0 ? `${recipes?.cookingTime.cook} min`: null}
              </p>
            </span>
            <span className="flex flex-col items-center">
              <p>Servings</p>
              <p>{recipes?.servings}</p>
            </span >
            <button className="flex  border-2 border-main  px-2 text-main rounded-xl items-center gap-4 w-fit ">
              <LuPrinter size={20} color={'#FF642F'} />
              <p>Print Recipe</p>
            </button>
          </div>
          <p className="my-8  font-medium max-w-[50rem]">{recipes?.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Ingredients:</h1>
          <ul className="flex flex-col gap-2">
            {
              recipes?.ingredients.map((ingredient, index) => (
                <li  key={index} className="flex gap-2 font-medium items-center">
                <input type="checkbox" id="checkbox1" className="peer relative h-5 w-5 shrink-0 appearance-none bg-white rounded-sm border border-main-dark after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-main-dark focus:outline-none" />
            <label htmlFor="checkbox1" className="w-full cursor-pointer font-medium text-gray-600 peer-checked:text-slate-500 peer-checked:line-through"> {ingredient}</label>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Instructions:</h1>
          <ul className="flex flex-col gap-3">
            {
              recipes?.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-2 font-medium items-start">
                  <span className="bg-main-dark py-1 rounded-lg mr-3 px-2 font-bold text-white text-[12px]">{index+1}</span>
                  <p>{instruction}</p>
                </li>
              ))
            }
          </ul>
        </div>
        <hr  className="text-main-dark my-4"/>
        <div className="flex flex-col ">
          <h2 className="text-2xl font-semibold mb-2">Rate this recipe and share your opinion</h2>
          <Rating count={5} size={18} color2={'#ffd700'} />
          <form className="flex flex-col gap-2">
            <textarea rows={4} cols={10} value={post} onChange={(e)=> setPost(e.target.value)} className="mt-2 p-2 outline-none rounded-md" placeholder='Write a review' />
            <button className="px-4 w-fit py-1 mt-2 text-white font-semibold bg-main-dark rounded-lg" onClick={(e)=>handlePost(e)}>Post</button>
          </form>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Comments</h1>
          <hr className="text-gray mt-2"/>
          <div className="flex gap-4 my-3">
            <FaUserCircle size={30} color={'#FF642F'} />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-between">
                <p className="font-medium">Sara logan</p>
                <p className="text-slate-500 text-sm">40min ago</p>
              </div>
              <p className="font-medium">Wow! this is very easy to make and delicious.</p>
              <div className="h-[1px] w-[50rem] bg-slate-300 mb-2"/>
              <div className="flex gap-4 text-slate-500 text-sm">
                <span className="flex gap-2">
                  <FaCommentDots size={20} color={'#FF642F'} />
                  <p>Reply</p>
                </span>
                <span className="flex gap-2">
                  <FaRegHeart size={20} color={'#FF642F'} />
                  <p>26</p>
                </span>
              </div>
            </div>
            </div>
        </div>
      </section>
      <article className="flex flex-col gap-4">
        <div className="bg-slate-300 rounded-lg p-4 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Nutrient Facts</h1>
          <ul className="flex flex-col gap-3 py-4">
            <li className="flex justify-between">
              <span>Calories</span>
              <span className="font-bold">322</span>
            </li>
            <li className="flex justify-between">
              <span>Fat</span>
              <span className="font-bold">12g</span>
            </li>
            <li className="flex justify-between">
              <span>Carbs</span>
              <span className="font-bold">16g</span>
            </li>
            <li className="flex justify-between">
              <span>Protein</span>
              <span className="font-bold">12g</span>
            </li>
            <li className="flex justify-between">
              <span>Cholesterol</span>
              <span className="font-bold">10g</span>
            </li>
            <li className="flex justify-between">
              <span>Sodium</span>
              <span className="font-bold">300mg</span>
            </li>
            <li className="flex justify-between">
              <span>Potassium</span>
              <span className="font-bold">14g</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-300 rounded-lg p-4 flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-bold">Related Product</h1>
          <div>
          <Image src='/dinner.webp' width={100} height={100} alt='recipe' className="w-[25rem] h-[20rem] object-fill rounded-xl" />
          </div>
          <button className="bg-main-dark rounded-lg mt-4 w-full py-2  text-white font-semibold">
            Buy Now
          </button>
        </div>
        <div className="flex flex-col gap-4 bg-main-light p-8  rounded-lg ">
        <h1 className="text-2xl font-bold">Stay connected with our Recipe Updates</h1>
        <p className="text-slate-500">For the latest tips and delicious recipes</p>
        <input type="text" placeholder="Enter your email" className="border-2 border-slate-300 rounded-md p-2 outline-none"/>
        <button className="px-4 w-full py-1 mt-2 text-white font-semibold bg-main-dark rounded-lg">Sign up</button>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Tags</h1>
          <div className="flex gap-3 my-4 flex-wrap ">
            <span className="border-2 text-slate-500  px-2 py-1 rounded-lg">#Healthy</span>
            <span className="border-2 text-slate-500  px-2 py-1 rounded-lg">#Vegan</span>
            <span className="border-2 text-slate-500  px-2 py-1 rounded-lg">#Keto</span>
            <span className="border-2 text-slate-500  px-2 py-1 rounded-lg">#Low Carb</span>
            
            </div>
        </div>
      </article>
      </div>
    </div>
      )
    }
    </>
  )
}

export default Page
