// Function To Define Navbar Component
export default function Navbar() {
  return (
    <header>
      <img
        src="poothali-matrimony-logo.png"
        alt="Poothali Matrimony Logo"
        className="logo-img"
      />
      <nav>
        <ul className="navlink-list">
          <li>
            <a href="#" className="navlink">
              How It Works
            </a>
          </li>

          <li>
            <a href="#" className="navlink">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="navlink">
              Profiles
            </a>
          </li>

          <li>
            <a href="#" className="navlink">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <button className="btn--admin-login">Admin Login</button>
      <button className="btn--menu-btn">
        <ion-icon name="menu-sharp"></ion-icon>
      </button>
    </header>
  );
}
