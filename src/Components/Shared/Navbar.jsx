//Importing Necessary Data
import NavContent from "./NavContents.jsx";

// Function To Define Navbar Component
export default function Navbar({ newPage, setNewPage }) {
  return (
    <header className={newPage === "home" ? "navbar--home" : "navbar--page"}>
      <NavContent setNewPage={setNewPage} />

      <button
        className="btn btn--login"
        onClick={() => setNewPage("dashboard")}
      >
        Admin Login
      </button>
    </header>
  );
}
