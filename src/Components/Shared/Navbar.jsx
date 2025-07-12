//Importing Necessary Data
import NavContent from "./NavContents.jsx";

// Function To Define Navbar Component
export default function Navbar({
  newPage,
  handleNewPage,
  isMenuOpen,
  setIsMenuOpen,
  setIsLoginFormOpen,
}) {
  return (
    <header className={newPage === "home" ? "navbar--home" : "navbar--page"}>
      <NavContent
        handleNewPage={handleNewPage}
        isMenuOpen={isMenuOpen}
        setIsLoginFormOpen={setIsLoginFormOpen}
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
