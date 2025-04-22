import logoImg from "../assets/Images/logo.png";
import { pageLinks } from "../assets/data";

// Function To Define Navbar Component
export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logoImg} alt="Poothali Matrimony Logo" className="logo-img" />
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
        <button className="btn--admin-login">Admin Login</button>
        <button className="btn--menu-btn">
          <ion-icon name="menu-sharp"></ion-icon>
        </button>
      </nav>
    </header>
  );
}
