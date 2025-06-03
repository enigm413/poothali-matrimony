//Importing Necessary Files
import NavContents from "./NavContents.jsx";

// Function to define Footer Component
export default function Footer({ handleNewPage }) {
  return (
    <footer>
      <NavContents handleNewPage={handleNewPage} />

      <p className="copy">
        Copyright © {new Date().getFullYear()} by Poothali Matrimony, Inc. All
        rights reserved.
      </p>
    </footer>
  );
}
