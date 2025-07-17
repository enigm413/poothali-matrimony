//Importing Necessary Data
import NavContent from "./NavContents.jsx";

// Function To Define Navbar Component
export default function Navbar({
  newPage,
  handleNewPage,
  handleAdminLogin,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <header className={newPage === "home" ? "navbar--home" : "navbar--page"}>
      <NavContent
        handleNewPage={handleNewPage}
        isMenuOpen={isMenuOpen}
        handleAdminLogin={handleAdminLogin}
      />

      <button
        className="btn btn--menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ion-icon
          name={!isMenuOpen ? "menu-outline" : "close-outline"}
        ></ion-icon>
      </button>
    </header>
  );
}
