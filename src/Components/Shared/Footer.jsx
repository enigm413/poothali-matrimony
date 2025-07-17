//Importing Necessary Files
import NavContents from "./NavContents.jsx";

// Function to define Footer Component
export default function Footer({ handleNewPage, handleAdminLogin }) {
  return (
    <footer>
      <NavContents
        handleNewPage={handleNewPage}
        handleAdminLogin={handleAdminLogin}
      />

      <p className="copy">
        Copyright © {new Date().getFullYear()} by Poothali Matrimony, Inc. All
        rights reserved.
      </p>
    </footer>
  );
}
