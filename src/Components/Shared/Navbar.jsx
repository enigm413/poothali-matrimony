//Importing Necessary Data
import { useState } from "react";
import NavContent from "./NavContents.jsx";

// Function To Define Navbar Component
export default function Navbar({
  newPage,
  handleNewPage,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <header className={newPage === "home" ? "navbar--home" : "navbar--page"}>
      <NavContent handleNewPage={handleNewPage} isMenuOpen={isMenuOpen} />

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
