//Importing Necessary Components
import NavContents from "./NavContents";

// Function to define Footer Component
export default function Footer() {
  return (
    <footer>
      <NavContents />

      <p className="copy">
        Copyright © {new Date().getFullYear()} by Poothali Matrimony, Inc. All
        rights reserved.
      </p>
    </footer>
  );
}
