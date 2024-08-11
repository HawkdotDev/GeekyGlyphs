// eslint-disable-next-line react/prop-types
const HorizontalCard = ({ time, heading, imageUrl }) => {
  return (
    <div className="bg-slate-300 flex p-2 m-2 w-56 h-24 rounded justify-center items-center">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt="Article Image"
          className="w-20 h-20 object-fill"
        />
      </div>
      <div className="px-2">
        <h1 className="text-sm pt-1 text-gray-500">{time} pm</h1>
        <h1 className="font-semibold text-xs md:text-md text-gray-700 text-wrap">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default HorizontalCard;
