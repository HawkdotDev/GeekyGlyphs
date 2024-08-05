import HeroCard from "./HeroCard";
import HorizontalCard from "./HorizontalCard";

const HeroSection = () => {
  return (
    <>
      {/* <div className="flex items-center justify-evenly text-xl">
        <button onClick={() => alert("hua nhi abhi!")} className="w-[50%] ml-2 mt-2 p-1 hover:bg-white hover:text-black">Trending</button>
        <button onClick={() => alert("hua nhi abhi!")} className="w-[50%] mr-2 mt-2 p-1 hover:bg-white hover:text-black border-l">Suggested</button>
      </div> */}
      <div className="flex justify-evenly items-center p-1 mb-2 border-b border-gray-600">
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </div>
      <h1 className="mx-6 my-2 text-4xl font-bold">
        Trending
      </h1>
      <HeroCard />
      <HorizontalCard />
      <HorizontalCard />
      <HorizontalCard />
      <div className="w-screen h-10 flex items-center justify-center">
        more
      </div>
    </>
  );
};

export default HeroSection;
