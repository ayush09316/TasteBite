import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-around items-center mb-20 gap-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold  leading-[4rem] text-black">
          Your Daily Dish <br />A <span className="text-main">Food</span>{" "}
          Journey
        </h1>
        <p className="max-w-[25rem] text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          aperiam ipsum ut temporibus eos mollitia laborum
        </p>
        <button className="bg-main px-6 py-2 rounded-md shadow-sm hover:shadow-md w-fit">
          Get Started
        </button>
      </div>

      <div className="relative z-20 ">
        

        <Image src="/hero-bg.webp" width={400} height={400} alt="hero" />

        <Image
          src="/drink.webp"
          width={200}
          height={200}
          alt="user2"
          className="rounded-full absolute -right-20 bottom-0  border-white w-auto"
        />

        <div className="bg-white text-black px-4 py-2  rounded-xl absolute bottom-4 -left-20">
          <div className="flex justify-around mb-2 relative ">
            <Image
              src="/user.webp"
              width={70}
              height={70}
              alt="user1"
              className="rounded-full absolute left-0 -top-8 border-8 border-white"
            />

            <div>
              <h2 className="text-xl font-medium ">Sara Johnson</h2>
              <div>4.8/5</div>
            </div>
          </div>

          <p className="text-slate-500 max-w-[19rem] ">
            Wow, this recipe is a flavor explosion in my mouth very delicious.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
