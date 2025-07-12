import "./Stylesheets/general.css";
import "./Stylesheets/Responsive/general-query.css";

import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient.js";
import { Navbar, Footer, Error, LoginForm } from "./Components/Shared";
import HomePage from "./Components/HomePage/";
import AdminPage from "./Components/AdminPage/";
import ProfilesPage from "./Components/ProfilesPage/";
import ProfilePage from "./Components/ProfilePage.jsx";
import FormPage from "./Components/FormPage/index.jsx";

export default function App() {
  const [newPage, setNewPage] = useState(
    sessionStorage.getItem("currentPage") || "home"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  console.log(isLoginFormOpen);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("RegisteredUsers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setIsError(true);
      } else {
        setUsers(data);
      }
    };

    fetchData();
  }, []);

  const handleNewPage = (page) => {
    setNewPage(page);
    setIsMenuOpen(false);
    sessionStorage.setItem("currentPage", page);
  };

  const handleMoreInfo = (userData) => {
    setUser(userData);
    handleNewPage("profile");
  };

  return (
    <>
      <Navbar
        handleNewPage={handleNewPage}
        newPage={newPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsLoginFormOpen={setIsLoginFormOpen}
      />

      <LoginForm
        isLoginFormOpen={isLoginFormOpen}
        setIsLoginFormOpen={setIsLoginFormOpen}
      />

      {newPage === "home" && <HomePage />}

      {newPage === "profiles" &&
        (isError ? (
          <Error />
        ) : (
          <ProfilesPage users={users} handleMoreInfo={handleMoreInfo} />
        ))}

      {newPage === "dashboard" &&
        (isError ? (
          <Error />
        ) : (
          <AdminPage users={users} handleNewPage={handleNewPage} />
        ))}

      {newPage === "profile" && <ProfilePage {...user} />}

      {newPage === "form" && <FormPage />}
      <Footer handleNewPage={handleNewPage} />
    </>
  );
}
