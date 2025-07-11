// Import Necessary Files
import logoImg from "../../assets/Images/logo.webp";
import { pageLinks } from "../../Data/pageLinkData";

export default function NavContents({
  handleNewPage,
  isMenuOpen,
  setIsLoginFormOpen,
  setIsMenuOpen,
}) {
  // Function To Handle Admin Page
  const handleAdminPage = () => {
    setIsMenuOpen(false);
    setIsLoginFormOpen(true);
  };

  return (
    <>
      <div className="logo-img-wrapper">
        <img src={logoImg} alt="Poothali Matrimony Logo" className="logo-img" />
      </div>

      <nav>
        <ul
          className={`navlink-list ${
            window.innerWidth <= 957 && !isMenuOpen ? "display--none" : ""
          }`}
        >
          {pageLinks.map((link) => {
            const { text, page, section } = link;
            return (
              <li key={text} onClick={() => handleNewPage(page)}>
                <a href={section} className="navlink">
                  {text}
                </a>
              </li>
            );
          })}
          <li>
            <button className="btn btn--login" onClick={handleAdminPage}>
              Admin Login
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
