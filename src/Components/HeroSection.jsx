import HeroCard from "./HeroCard";
import { Carousel } from "antd";
import Tag from "../Components/unUsed/Tag";

const HeroSection = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="flex items-baseline">
          <h1 className="mx-5 my-2 text-4xl font-bold">Trending</h1>
          <div className="flex gap-4 items-baseline overflow-auto whitespace-nowrap scrollbar-hide md:hidden">
            <Tag text="Valorant" color="#dc2626" />
            <Tag text="CS2" color="#ca8a04" />
            <Tag text="Genshin" color="#2563eb" />
            <Tag text="Apex" color="#16a34a" />
            <Tag text="R6" color="#9333ea" />
            <Tag text="Valorant" color="#dc2626" />
            <Tag text="CS2" color="#ca8a04" />
            <Tag text="Genshin" color="#2563eb" />
            <Tag text="Apex" color="#16a34a" />
            <Tag text="R6" color="#9333ea" />
          </div>
        </div>
        <Carousel autoplay draggable easing="ease-in">
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </Carousel>
      </div>
      <div className="hidden lg:flex">
        <div className="w-2/3 h-[82.5vh]">
        <h1 className="mx-6 my-2 text-4xl font-bold">Trending</h1>
        <Carousel autoplay draggable easing="ease-in" style={{backgroundColor: "blue", height: "75.5vh", marginBottom: "8px"}}>
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </Carousel>

        </div>
        <div className="w-1/3 h-[82.5vh] bg-slate-500">

        </div>
        {/* <div className="flex items-baseline">
          <h1 className="mx-6 my-2 text-4xl font-bold">Trending</h1>
          <div className="flex gap-4 items-baseline overflow-auto whitespace-nowrap scrollbar-hide md:hidden">
            <Tag text="Valorant" color="#dc2626" />
            <Tag text="CS2" color="#ca8a04" />
            <Tag text="Genshin" color="#2563eb" />
            <Tag text="Apex" color="#16a34a" />
            <Tag text="R6" color="#9333ea" />
            <Tag text="Valorant" color="#dc2626" />
          </div>
        </div> */}
        {/* <Carousel autoplay draggable easing="ease-in">
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </Carousel> */}
      </div>
    </>
  );
};

export default HeroSection;
