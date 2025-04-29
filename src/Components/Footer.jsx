import logoImg from "../assets/Images/logo.png";
import Pagelinks from "./Pagelinks";
import "../Stylesheets/footer.css";

// Function to define Footer Component
export default function Footer() {
  return (
    <footer className="section-footer">
      <nav className="wrapper footer-container">
        <img src={logoImg} alt="logo-img" className="logo-img" />

        <Pagelinks />

        <p className="copy">
          Copyright © {new Date().getFullYear()} by Poothali Matrimony, Inc. All
          rights reserved.
        </p>
      </nav>
    </footer>
  );
}
