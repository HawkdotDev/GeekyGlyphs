import ArticleGrid from "../Components/ArticleGrid"
import HeroSection from "../Components/HeroSection"

const HomePage = () => {
  return (
    <>
        <HeroSection />
        {/* <div className="bg-gray-700 p-6">
        <img
          src="https://images8.alphacoders.com/133/1339620.png"
          alt="darksouls1 image"
          className="border w-20"
        />
        </div> */}
        <ArticleGrid />
    </>
  )
}

export default HomePage