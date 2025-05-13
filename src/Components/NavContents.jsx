// Import Necessary Assets to Navbar Component
import logoImg from "../assets/Images/logo.png";

//Defining PageLinks
const pageLinks = [
  {
    id: "pageLink01",
    href: "#section-how-it-works",
    text: "how it works",
    page: "home",
  },

  {
    id: "pageLink02",
    href: "#section-gallery",
    text: "gallery",
    page: "home",
  },

  {
    id: "pageLink03",
    href: "#",
    text: "profiles",
    page: "profiles",
  },

  {
    id: "pageLink04",
    href: "#section-contact",
    text: "contact us",
    page: "home",
  },
];

export default function NavContents({ setActivePage }) {
  return (
    <>
      <div className="logo-img-wrapper">
        <img src={logoImg} alt="Poothali Matrimony Logo" className="logo-img" />
      </div>
      <nav>
        <ul className="navlink-list">
          {pageLinks.map((link) => {
            const { id, href, text, page } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  className="navlink"
                  onClick={() => setActivePage(page)}
                >
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
