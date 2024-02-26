import RecipeForm from "@/components/utility/RecipeForm";

const Page = () => {
  return (
    <div className=" relative flex flex-col h-auto w-full bg-prim">
      <div className="w-full h-[1px] bg-slate-300" />
      <h1 className="font-bold text-2xl text-black pl-[9rem] py-2">
        Create new Recipe
      </h1>
      <div className="w-full h-[0.5px] bg-slate-300" />
      <RecipeForm />
    </div>
  );
};

export default Page;
