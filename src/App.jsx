import Hero from "./components/HeroSection/Hero";
import About from "./components/AboutSection";
import Market from "./components/marketSection";
import ExchangeSection from "./components/ExchangeSection/index.jsx";
import Partner from "./components/partnerSection/index.jsx";
import Slider from "./components/Company-Slider";
function App() {
  return(
      <div className="">
          <Hero/>
          <About/>
          <Market />
          <ExchangeSection />
          <div className="flex flex-col items-center justify-center font-bold mainBackground">
              <Partner />
          </div>
          <div className="px-0 lg:px-0 2xl:px-48">
              {/* <div className="flex flex-col items-center justify-center p-80 font-bold">
      <p className="text-pink-800">Project 2</p>
      <Index />
    </div> */}
              <Slider />
          </div>
      </div>
  );
}

export default App;
