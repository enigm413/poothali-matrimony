//Importing Necessary Components
import NavContents from "./NavContents";

// Function To Define Navbar Component
export default function Navbar({ activePage, setActivePage }) {
  const headerStyle = activePage === "home" ? "home--navbar" : "page--navbar";
  return (
    <header className={headerStyle}>
      <NavContents setActivePage={setActivePage} />
      <a
        href="#"
        className="btn btn--login"
        onClick={() => setActivePage("admin")}
      >
        Admin Login
      </a>
    </header>
  );
}
