import data from "../Data/articleData.json";

const HorizontalCard = () => {
  return (
    <div className="flex mx-6 py-3 border-b border-slate-800">
      <div className="px-1">
        <h1 className="text-xs py-1 text-gray-700">{data.time} pm</h1>
        <h1 className="font-semibold text-lg mb-2 text-gray-300">
          {data.heading}
        </h1>
      </div>
      <img
        src="https://images8.alphacoders.com/133/1339620.png"
        alt="darksouls1 image"
        className="border resize w-1/2 h-1/2" //needs work
      />
    </div>
  );
};

export default HorizontalCard;
