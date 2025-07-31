import { Hero } from "./store/components/Home/Hero";
import { MainProducts } from "./store/components/Home/MainProducts";
import { Description } from "./store/components/Home/Description";



export default function Home() {

  
  
  return (
    <main className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero/>
      <Description/>
      <MainProducts/>
    </main>
  );
}
