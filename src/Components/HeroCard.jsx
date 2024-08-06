import data from "../Data/articleData.json";
const HeroCard = () => {
  const truncatedIntro =
    data.intro.length > 200 ? (
      <>
        {data.intro.substring(0, 200)}...
        <a className="text-pink-500" href="#">
          Read more
        </a>
      </>
    ) : (
      data.intro
    );
  return (
    <>
      <button className="mx-6 text-left border border-slate-700 mt-2 py-2 px-3 rounded-md">
        <img
          src="https://images8.alphacoders.com/133/1339620.png"
          alt={data.imageAlt}
          className=""
        />
        <h1 className="text-xs py-1 text-gray-700">{data.time} pm</h1>
        <h1 className="font-semibold text-xl mb-2 text-gray-300">
          {data.heading}
        </h1>
        <h1 className="pb-3 text-gray-500">{truncatedIntro}</h1>
      </button>
      <div className="pb-2 pt-1 text-xs text-center">page nos</div>
    </>
  );
};

export default HeroCard;
