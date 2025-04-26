import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import HowItWorks from "./Components/HowItWorks";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Profiles from "./Components/Profiles";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <HowItWorks />
      <Gallery />
      <Contact /> */}
      <Profiles />
      <Footer />
    </>
  );
}
