import React from "react";
import Image from "next/image";
import { FaBookmark,FaUserCircle } from "react-icons/fa";
import Rating from "../utility/Rating";
import { GiBurningMeteor } from "react-icons/gi";
import { recipeProps } from "@/types";


const RecipeCard = ({ recipe }: { recipe?: recipeProps }) => {
  return (
    <>
      <div className="flex relative flex-col pb-4 bg-white w-fit rounded-lg shadow-md">
        <FaBookmark
          size={20}
          color={"#FF642F"}
          className="ml-[10px] mt-[11px] absolute"
        />
        <Image
          src={recipe?.image ? `${recipe?.image}` : "/dinner.webp"}
          width={300}
          height={300}
          alt="recipe"
          className="rounded-t-lg w-[20rem] object-fit h-[15rem]"
        />
        <div className="text-black py-2 px-4 flex justify-between">
          <div>
            <Rating count={5} size={18} color2={"#ffd700"} />
            <p className="text-sm font-medium my-2">{recipe?.title}</p>
          </div>
          <span className="text-sm text-slate-600"> 4.8/5</span>
        </div>
        <div className="flex justify-between text-black items-center px-4">
          <div className="flex items-center gap-3 font-medium text-md">
            <FaUserCircle size={25} color={"#ff4500"} />
            <span>Sara</span>
          </div>
          <span className="border-2 border-gray-light p-1 flex gap-2 rounded-lg text-sm">
            <GiBurningMeteor size={18} color={"#ff4500"} />
            {recipe?.Calories} cals
          </span>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
