//Importing Necessary Data
import NavContent from "./NavContents.jsx";

// Function To Define Navbar Component
export default function Navbar({ newPage, handleNewPage }) {
  return (
    <header className={newPage === "home" ? "navbar--home" : "navbar--page"}>
      <NavContent handleNewPage={handleNewPage} />

      <button
        className="btn btn--login"
        onClick={() => handleNewPage("dashboard")}
      >
        Admin Login
      </button>

      <button
        className="btn btn--menu"
        onClick={() => handleNewPage("dashboard")}
      >
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </header>
  );
}
