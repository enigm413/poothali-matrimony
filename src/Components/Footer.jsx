import logoImg from "../assets/Images/logo.png";
import { pageLinks } from "../assets/data";
import "../Stylesheets/footer.css";

// Function to define Footer Component
export default function Footer() {
  return (
    <footer className="section-footer">
      <nav className="wrapper footer-container">
        <img src={logoImg} alt="logo-img" className="logo-img" />

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

        <div>
          <p className="copy">
            Copyright © {new Date().getFullYear()} by Poothali Matrimony, Inc.
            All rights reserved.
          </p>
        </div>
      </nav>
    </footer>
  );
}
