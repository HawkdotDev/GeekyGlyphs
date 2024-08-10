import HeroCard from "./HeroCard";
import { Carousel } from "antd";

const HeroSection = () => {
  return (
    <>
      <div className="flex items-baseline">
        <h1 className="mx-6 my-2 text-4xl font-bold">Trending</h1>
        <div className="flex gap-4 items-baseline overflow-auto whitespace-nowrap scrollbar-hide">
          <button className="text-red-600 border-red-600 px-3 border-1 border rounded-md py-[2px] inline-block text-center">
            Valorent
          </button>
          <button className="text-yellow-600 border-yellow-600 px-3 border-1 border rounded-md py-[2px] inline-block text-center">
            CS2
          </button>
          <button className="text-blue-600 border-blue-600 px-3 border-1 border rounded-md py-[2px] inline-block text-center">
            Genshin
          </button>
          <button className="text-green-600 border-green-600 px-3 border-1 border rounded-md py-[2px] inline-block text-center">
            Apex
          </button>
          <button className="text-red-600 border-red-600 px-3 border-1 border rounded-md py-[2px] inline-block text-center">
            Valorent
          </button>
          <button className="text-red-600 border-red-600 px-3 border-1 border rounded-md py-[2px] inline-block text-center">
            Valorent
          </button>
        </div>
      </div>
      <Carousel autoplay draggable easing="ease-in">
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </Carousel>
    </>
  );
};

export default HeroSection;
