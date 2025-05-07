// Import Necessary Assets to Navbar Component
import logoImg from "../assets/Images/logo.png";

//Defining PageLinks
const pageLinks = [
  { id: "pageLink01", href: "#section-how-it-works", text: "how it works" },
  { id: "pageLink02", href: "#section-gallery", text: "gallery" },
  { id: "pageLink03", href: "#section-profiles", text: "profiles" },
  { id: "pageLink04", href: "#section-contact", text: "contact us" },
];

export default function NavContents() {
  return (
    <>
      <div className="logo-img-wrapper">
        <img src={logoImg} alt="Poothali Matrimony Logo" className="logo-img" />
      </div>
      <nav>
        <ul className="navlink-list">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="navlink">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
