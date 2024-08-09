// import HeroSection from "./Components/HeroSection"
// import ArticlePage from "./Components/ArticlePage"
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      <NextUIProvider>
        <main className="w-screen h-screen">
          <Navbar />
          {/* <ArticlePage /> */}
          <HomePage />
          {/* <HeroSection /> */}
          {/* <ArticleCard /> */}
          {/* hero */}
          {/* footer */}
        </main>
      </NextUIProvider>
    </>
  );
}

export default App;
