/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const HorizontalCard = ({ time, heading, imageUrl }) => {
  return (
    <div className="bg-slate-300 flex p-2 my-2 rounded justify-start items-center w-full max-w-sm md:max-w-md lg:max-w-lg h-24">
      <div className="flex-shrink-0 w-20 h-20">
        <img
          src={imageUrl}
          alt="Article Image"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="flex-grow px-2 min-w-0">
        <h1 className="text-xs sm:text-sm text-gray-500">
          {"tomorrow"}
        </h1>
        <h1 className="font-semibold text-xs sm:text-sm md:text-base truncate text-gray-700 whitespace-normal overflow-hidden text-ellipsis">
          {"souls event by fromSoftware"}
        </h1>
      </div>
    </div>
  );
};

export default HorizontalCard;
