import Hero from "./Hero.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";
import "../../Stylesheets/homePage.css";
import "../../Stylesheets/Responsive/homePage-query.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Gallery />
      <Contact />
    </>
  );
}
