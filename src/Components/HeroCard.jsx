import data from "../Data/articleData.json";
const HeroCard = () => {
  return (
    <>
      <button className="mx-6 text-left border-b border-slate-800 mt-2">
        <img
          src="https://images8.alphacoders.com/133/1339620.png"
          alt="darksouls1 image"
          className="border"
        />
        <h1 className="text-xs py-1 text-gray-700">{data.time} pm</h1>
        <h1 className="font-semibold text-xl mb-2 text-gray-300">
          {data.heading}
        </h1>
        <h1 className="pb-3 text-gray-500">{data.intro}</h1>
        <div className="pb-2 text-xs text-center">page nos</div>
      </button>
    </>
  );
};

export default HeroCard;
