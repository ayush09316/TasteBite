import React from "react";
import { IoMdNotifications } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { UserButton, auth } from "@clerk/nextjs";

const Navbar = async () => {
  const { userId } = auth();
  return (
    <header className="h-28 px-10 py-2  text-black  ">
      <nav className="mx-24 h-20 flex items-center justify-between font-semibold bg-white px-5 rounded-3xl">
        <div>
          <Image src="/logo.webp" alt="logo" width={150} height={150} />
        </div>
        <ul className="flex gap-10 cursor-pointer">
          <Link href={`/`} className="hover:text-main">Home</Link>
          <Link href={`/recipe`} className="hover:text-main">Recipe</Link>
          <Link href={`/add-recipe`}className="hover:text-main">Add Recipe</Link>
          <li className="hover:text-main">Blog</li>
          <li className="hover:text-main">About Us</li>
        </ul>
        {userId ? (
          <div className="flex gap-4 items-center">
            <FaSearch size={25} color="#FFD7C9" className="cursor-pointer" />
            <IoMdNotifications size={30} className="cursor-pointer" />
            <UserButton afterSignOutUrl={'/'} />
          </div>
        ) : (
            <div className=" flex gap-4">
            <Link
              href={`/sign-in`}
              className="border-2 border-main-light hover:shadow-md  px-6 py-1 rounded-md "
            >
              Login
            </Link>
            <Link
              href={"/sign-up"}
              className="bg-main-light px-6 py-1 rounded-md shadow-sm hover:shadow-md "
            >
              Sign Up
            </Link>
          </div>
        )}
       
      </nav>
    </header>
  );
};

export default Navbar;
