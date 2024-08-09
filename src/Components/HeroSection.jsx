import HeroCard from "./HeroCard";
// import HorizontalCard from "./HorizontalCard";
// import HorizontalScrollSection from "./HorizontalScrollSection";
import { Carousel } from "antd";

const HeroSection = () => {
  return (
    <>
      {/* <div className="flex items-center justify-evenly text-xl">
        <button onClick={() => alert("hua nhi abhi!")} className="w-[50%] ml-2 mt-2 p-1 hover:bg-white hover:text-black">Trending</button>
        <button onClick={() => alert("hua nhi abhi!")} className="w-[50%] mr-2 mt-2 p-1 hover:bg-white hover:text-black border-l">Suggested</button>
      </div> */}
      {/* <HorizontalScrollSection /> */}
      <h1 className="mx-6 my-2 text-4xl font-bold">Trending</h1>
      <Carousel autoplay draggable easing="ease-in">
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </Carousel>
      {/* <HorizontalCard />
      <HorizontalCard />
      <HorizontalCard />
      <div className="w-screen h-10 flex items-center justify-center">
        more
      </div> */}
    </>
  );
};

export default HeroSection;
