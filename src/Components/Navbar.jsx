import logoImg from "../assets/Images/logo.png";
import "../Stylesheets/navbar.css";
import Pagelinks from "./Pagelinks";

// Function To Define Navbar Component
export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logoImg} alt="Poothali Matrimony Logo" className="logo-img" />
        <Pagelinks />
        <button className="btn--admin-login">Admin Login</button>
        <button className="btn--menu-btn">
          <ion-icon name="menu-sharp"></ion-icon>
        </button>
      </nav>
    </header>
  );
}
