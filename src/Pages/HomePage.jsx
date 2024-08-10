import ArticleGrid from "../Components/ArticleGrid";
import HeroSection from "../Components/HeroSection";
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

const HomePage = () => {
  const articles = Array(4).fill(data);
  return (
    <>
      <HeroSection />
      <div className="">
        <div className="">
          <div className="flex justify-start items-baseline">
            <h1
              className="px-6 pb-2 font-bold text-xl"
            >
              Upcoming
            </h1>
            {/* <h1 className="inline-block text-center px-4">
              News Straight out of the industry oven
            </h1> */}
          </div>
  
    <div
      className={`flex overflow-auto scrollbar-hide border-t lg:grid-cols-3 gap-6 px-5 py-3 bg-neutral-900`}
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
          {/* <ArticleGrid bg="bg-neutral-800" /> */}
        </div>
        <div className="flex justify-end items-baseline">
          <h1 className="inline-block text-center px-4">
            Find Top picks for you with
          </h1>
          <h1
            className="px-6 py-2 rounded-t-lg border-t border-x cursor-pointer font-bold text-2xl bg-neutral-900"
            onClick={() => alert("not made yet")}
          >
            Suggested
          </h1>
        </div>
        <ArticleGrid bg="bg-neutral-900" />
      </div>
      <div className="bg-neutral-900">
        <div className="flex justify-start items-baseline">
          <h1
            className="px-6 py-2 rounded-t-lg border-t border-x cursor-pointer font-bold text-2xl bg-neutral-800"
            onClick={() => alert("not made yet")}
          >
            Latest
          </h1>
          <h1 className="inline-block text-center px-4">
            News Straight out of the industry oven
          </h1>
        </div>
        <ArticleGrid bg="bg-neutral-800" />
      </div>
    </>
  );
};

export default HomePage;
