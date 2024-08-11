import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
        <main className="w-screen h-screen lg:hidden">
          <Navbar />
          <HomePage />
          <footer className="w-screen h-[40vh] bg-gray-900 flex justify-center p-6"> 
            Footer section
          </footer>
        </main>
    </>
  );
}

export default App;
