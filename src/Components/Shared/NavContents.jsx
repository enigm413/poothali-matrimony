// Import Necessary Files
import logoImg from "../../assets/Images/logo.webp";
import { pageLinks } from "../../Data/pageLinkData";

export default function NavContents({ setNewPage }) {
  return (
    <>
      <div className="logo-img-wrapper">
        <img src={logoImg} alt="Poothali Matrimony Logo" className="logo-img" />
      </div>

      <nav>
        <ul className="navlink-list">
          {pageLinks.map((link) => {
            const { text, page } = link;
            return (
              <li
                className="navlink"
                key={text}
                onClick={() => setNewPage(page)}
              >
                {text}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
