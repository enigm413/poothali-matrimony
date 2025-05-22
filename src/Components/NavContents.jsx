// Import Necessary Files

import logoImg from "../assets/Images/logo.png";
import { pageLinks } from "../Data/pageLinkData";

export default function NavContents({ setNewPage }) {
  return (
    <>
      <div className="logo-img-wrapper">
        <img src={logoImg} alt="Poothali Matrimony Logo" className="logo-img" />
      </div>

      <nav>
        <ul className="navlink-list">
          {pageLinks.map((link) => {
            const { text, href, page } = link;
            return (
              <li key={text} onClick={() => setNewPage(page)}>
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
