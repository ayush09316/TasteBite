import { Hero,Recipe,Category,Connect } from "@/components";


export default function Home() {
  return (
    <main className="bg-prim">
      <div className='flex flex-col justify-center'>
      <Hero/>
      <Recipe/>
      <Connect/>
      <Category/>
    </div>
      </main>
  );
}
