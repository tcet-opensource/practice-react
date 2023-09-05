import Hero from "./components/HeroSection/Hero";
import About from "./components/AboutSection";
import Market from "./components/marketSection";
import ExchangeSection from "./components/ExchangeSection/index.jsx";
import Partner from "./components/partnerSection/index.jsx";

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
      </div>
  )
}

export default App;
