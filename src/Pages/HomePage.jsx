/* eslint-disable react/prop-types */
import ArticleGrid from "../Components/ArticleGrid";
import HeroSection from "../Components/HeroSection";
import data from "../Data/articleData.json";
import HorizontalCard from "../Components/HorizontalCard"
// import Tag from "../Components/unUsed/Tag";

const HomePage = () => {
  const articles = Array(2).fill(data);
  return (
    <>
      <HeroSection />
      <div className="">
        <div className="">
          <div className="flex justify-start items-baseline">
            <h1 className="px-3 font-bold text-2xl">Upcoming</h1>
          </div>

          <div className="overflow-auto whitespace-nowrap scrollbar-hide gap-4 flex px-1">
            {articles.map((article, index) => (
              <HorizontalCard
                key={index}
                time={article.time}
                heading={article.heading}
                imageUrl={
                  article.imageUrl ||
                  "https://images8.alphacoders.com/133/1339620.png"
                }
              />
            ))}
            {/* <Tag text="Valorant" color="#dc2626" />
            <Tag text="CS2" color="#ca8a04" />
            <Tag text="Genshin" color="#2563eb" />
            <Tag text="Apex" color="#16a34a" />
            <Tag text="R6" color="#9333ea" />
            <Tag text="Valorant" color="#dc2626" />
            <Tag text="CS2" color="#ca8a04" />
            <Tag text="Genshin" color="#2563eb" />
            <Tag text="Apex" color="#16a34a" />
            <Tag text="R6" color="#9333ea" /> */}
          </div>
        </div>
        <div className="flex justify-end items-baseline">
          <h1 className="inline-block text-center px-4">
            Top picks for you with
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
            Straight out of the industry
          </h1>
        </div>
        <ArticleGrid bg="bg-neutral-800" />
      </div>
    </>
  );
};

export default HomePage;
