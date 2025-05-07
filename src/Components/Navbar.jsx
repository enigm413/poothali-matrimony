//Importing Necessary Components
import NavContents from "./NavContents";

// Function To Define Navbar Component
export default function Navbar() {
  return (
    <header>
      <NavContents />
      <button className="btn btn--login">Admin Login</button>
    </header>
  );
}
