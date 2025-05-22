//Importing Necessary Files
import NavContents from "./NavContents.jsx";

// Function to define Footer Component
export default function Footer({ setNewPage }) {
  return (
    <footer>
      <NavContents setNewPage={setNewPage} />

      <p className="copy">
        Copyright © {new Date().getFullYear()} by Poothali Matrimony, Inc. All
        rights reserved.
      </p>
    </footer>
  );
}
