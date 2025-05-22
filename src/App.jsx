import "./Stylesheets/general.css";
import HomePage from "./Pages/HomePage";
import ProfilesPage from "./Pages/ProfilePage";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { useState } from "react";

export default function App() {
  const [newPage, setNewPage] = useState("home");

  return (
    <>
      <Navbar setNewPage={setNewPage} newPage={newPage} />
      {newPage === "home" && <HomePage />}
      {newPage === "profiles" && <ProfilesPage />}
      <Footer setNewPage={setNewPage} />
    </>
  );
}
