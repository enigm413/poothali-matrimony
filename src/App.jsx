// Importing Necessary Components
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import HowItWorks from "./Components/HowItWorks";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Profiles from "./Components/Profiles";
import SummaryCards from "./Components/SummaryCards";
import RegisteredUsers from "./Components/RegisterdUsers";

// Importing Necessary Stylesheets
import "./Stylesheets/general.css";
import "./Stylesheets/index.css";
import "./Stylesheets/profiles.css";
import "./Stylesheets/dashboard.css";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <HowItWorks />
      <Gallery />
      <Contact />
      <Profiles /> */}
      <SummaryCards />
      <RegisteredUsers />
      <Footer />
    </>
  );
}
