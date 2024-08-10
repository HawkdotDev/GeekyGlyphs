// import React from 'react';
import data from "../Data/articleData.json";

// eslint-disable-next-line react/prop-types
const HorizontalCard = ({ time, heading, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row p-2">
      <img
        src={imageUrl}
        alt="article image"
        className="border w-full h-auto md:w-1/2 md:h-1/2 md:mt-0"
      />
      <div className="flex-1 p-1 ">
        <h1 className="text-xs pt-1 text-gray-500">{time} pm</h1>
        <h1 className="font-semibold text-md text-gray-300 pb-2">{heading}</h1>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ArticleGrid = ({ bg }) => {
  const articles = Array(4).fill(data);
  return (
    <div
      // className={`flex items-center p-[4px] cursor-pointer rounded-sm hover:bg-gray-100 hover:text-black ${optionClassName}`}
      className={`grid grid-cols-2 border-t lg:grid-cols-3 gap-6 px-5 py-3 bg-neutral-900 ${bg}`}
    >
      {articles.map((article, index) => (
        <HorizontalCard
          key={index}
          time={article.time}
          heading={article.heading}
          imageUrl="https://images8.alphacoders.com/133/1339620.png"
        />
      ))}
    </div>
  );
};

export default ArticleGrid;
