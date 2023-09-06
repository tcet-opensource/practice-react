import Hero from "./components/HeroSection/Hero";
import About from "./components/AboutSection";
import Market from "./components/marketSection";
import ExchangeSection from "./components/ExchangeSection/index.jsx";
import Partner from "./components/partnerSection/index.jsx";
import Slider from "./components/Company-Slider";
import ContactSection from "./components/ContactSection/index.jsx";
import SectionWithGradient from "./components/JointeamSection/SectionWithGradient.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <Hero />
      <About />
      <Market />
      <ExchangeSection />
      <div className="flex flex-col items-center justify-center font-bold mainBackground">
        <Partner />
      </div>
      <div className="px-0 lg:px-0 2xl:px-48">
        <Slider />
      </div>
      <SectionWithGradient />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
