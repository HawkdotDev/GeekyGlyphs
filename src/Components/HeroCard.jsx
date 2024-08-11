import data from "../Data/articleData.json";
const HeroCard = () => {
  const truncatedIntro =
    data.intro.length > 250 ? (
      <>
        {data.intro.substring(0, 250)}...
        <a className="text-pink-500" href="#">
          Read more
        </a>
      </>
    ) : (
      data.intro
    );
  return (
    <>
      <div className="lg:block hidden">
        <button className="h-[70vh] flex justify-center mx-6 pb-4 text-left border border-slate-700 mt-2 py-2 px-5 rounded-md">
          <img
            src="https://images8.alphacoders.com/133/1339620.png"
            alt={data.imageAlt}
            className="w-[500px] border"
          />
          <div className="h-1/5 ml-4">
            <h1 className="w-full text-xs py-1 text-gray-700">
              {data.time} pm
            </h1>
            <h1 className="w-full font-semibold text-4xl mb-2 text-gray-300">
              {data.heading}
            </h1>
            <h1 className=" pb-3 text-gray-500">{data.intro}</h1>
          </div>
        </button>
      </div>
      <div className="lg:hidden block">
        <button className="mx-5 mb-7 text-left border border-slate-700 mt-2 py-2 px-5 rounded-md">
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
      </div>
    </>
  );
};

export default HeroCard;
