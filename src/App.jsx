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
  //Defining necessary states
  const [newPage, setNewPage] = useState(
    sessionStorage.getItem("currentPage") || "home"
  );
  const [prevPage, setPrevPage] = useState("home");
  const [userRole, setUserRole] = useState("normal");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

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

  //Function To Handle New Page
  const handleNewPage = (page) => {
    setPrevPage(newPage);
    setNewPage(page);
    sessionStorage.setItem("currentPage", page);
  };

  // Function To Handle More Info
  const handleMoreInfo = (userData) => {
    setIsLoginFormOpen(true);
    setUser(userData);
  };

  //Function To Handle Admin Page
  const handleAdminPage = async (error, email, loginForm) => {
    if (error) {
      setLoginError("⚠️ Sorry, this account does not exist");
    } else if (email !== "admin123@gmail.com") {
      setLoginError("⚠️ Sorry, this account does have admin privilege");
    } else {
      setLoginError("");
      loginForm.reset();
      setIsLoginFormOpen(false);
      setUserRole("normal");
      handleNewPage("dashboard");
    }
  };

  //Function To Handle User Previlage
  const handleProfilePage = (error, loginForm) => {
    if (error) {
      setLoginError("⚠️ Sorry, this account does not exist");
      console.log(error);
    } else {
      setLoginError("");
      loginForm.reset();
      setIsLoginFormOpen(false);
      handleNewPage("profile");
    }
  };

  // Function To Handle Login Form
  const handleLoginForm = async (event) => {
    event.preventDefault();
    const loginForm = event.currentTarget;
    const formData = new FormData(loginForm);
    const loginData = Object.fromEntries(formData);
    const { data, error } = await supabase.auth.signInWithPassword(loginData);
    if (userRole === "admin") {
      handleAdminPage(error, data?.user?.email, loginForm);
    } else {
      handleProfilePage(error, loginForm);
    }
  };

  return (
    <>
      <Navbar
        handleNewPage={handleNewPage}
        newPage={newPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsLoginFormOpen={setIsLoginFormOpen}
        setUserRole={setUserRole}
      />

      <LoginForm
        isLoginFormOpen={isLoginFormOpen}
        setIsLoginFormOpen={setIsLoginFormOpen}
        handleLoginForm={handleLoginForm}
        prevPage={prevPage}
        loginError={loginError}
        handleNewPage={handleNewPage}
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
