import HeroCard from "./HeroCard";

const HeroSection = () => {
  return (
    <>
      <div className="flex items-center justify-evenly p-3">
        <h1>Trending</h1>
        <h1>Suggested</h1>
      </div>
      <HeroCard />
    </>
  );
};

export default HeroSection;
