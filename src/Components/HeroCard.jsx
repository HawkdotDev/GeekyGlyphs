const HeroCard = () => {
  return (
    <>
      <div className="text-xs text-center py-1">
        page no.
      </div>
      <button className="mx-4 text-left">
        <img
          src="https://images8.alphacoders.com/133/1339620.png"
          alt="darksouls1 image"
          className="border"
        />
        <h1 className="text-xs py-2 text-gray-700">date</h1>
        <h1 className="font-semibold text-lg mb-2 text-gray-300">Heading</h1>
        <h1 className="border-b border-slate-800 pb-4 text-gray-500">
          description
        </h1>
      </button>
    </>
  );
};

export default HeroCard;
