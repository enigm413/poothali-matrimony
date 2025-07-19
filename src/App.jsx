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
  const [userRole, setUserRole] = useState(
    sessionStorage.getItem("currentUser") || "nonRegUser"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [filterError, setFilterError] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [user, setUser] = useState(() => {
    const profile = sessionStorage.getItem("currentProfile");
    return profile ? JSON.parse(profile) : {};
  });

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
      handleUserRole("admin");
      handleNewPage("dashboard");
    }
  };

  //Function To Handle Registered User Previlage
  const handleProfilePage = (error, loginForm) => {
    if (error) {
      setLoginError("⚠️ Sorry, this account does not exist");
    } else {
      setLoginError("");
      loginForm.reset();
      setIsLoginFormOpen(false);
      handleUserRole("regUser");
      handleNewPage("profile");
    }
  };

  //Function To Handle Filtered Profiles
  const handleProfileFilters = (options) => {
    const filteredProfiles = users.filter((profile) => {
      const minAge = Number(options.minAge) || 18;
      const maxAge = Number(options.maxAge) || 60;

      return (
        (options.gender === "" || options.gender === profile.gender) &&
        (options.religion === "" || options.religion === profile.religion) &&
        profile.age >= minAge &&
        profile.age <= maxAge
      );
    });

    setFilteredUsers(filteredProfiles);
  };

  //Function To Handle New Page
  const handleNewPage = (page) => {
    setNewPage(page);
    sessionStorage.setItem("currentPage", page);
    setIsMenuOpen(false);
  };

  // Function To Handle New User Role
  const handleUserRole = (role) => {
    setUserRole(role);
    sessionStorage.setItem("CurrentRole", role);
  };

  // Function To Handle More Info
  const handleMoreInfo = (userData) => {
    if (userRole !== "nonRegUser") {
      handleNewPage("profile");
    } else {
      setIsLoginFormOpen(true);
    }
    setUser(userData);
    sessionStorage.setItem("currentProfile", JSON.stringify(userData));
    window.scrollTo({ top: 0 });
  };

  // Function To Handle Admin Page
  const handleAdminLogin = () => {
    if (userRole === "admin") {
      setIsLoginFormOpen(false);
      handleNewPage("admin");
    }
    setIsMenuOpen(false);
    setIsLoginFormOpen(true);
  };

  // Function To Handle Login Form
  const handleLoginForm = async (event) => {
    event.preventDefault();
    const loginForm = event.currentTarget;
    const formData = new FormData(loginForm);
    const loginData = Object.fromEntries(formData);
    const { data, error } = await supabase.auth.signInWithPassword(loginData);
    if (newPage === "profiles") {
      handleProfilePage(error, loginForm);
    } else {
      handleAdminPage(error, data?.user?.email, loginForm);
    }
  };

  // Function To Handle Filter Form
  const handleFilterForm = (event) => {
    event.preventDefault();
    const filterForm = event.currentTarget;
    const formData = new FormData(filterForm);
    const filterOptions = Object.fromEntries(formData);
    handleProfileFilters(filterOptions);
    if (filteredUsers.length === 0) {
      setFilterError("⚠️ Sorry, No profile within given age range");
    } else {
      filterForm.reset();
      setIsFilterFormOpen(false);
      setFilterError("");
    }
  };

  // Function To Handle Close Login
  const handleCloseLogin = () => {
    setIsLoginFormOpen(false);
    setLoginError("");
  };

  // Function To Handle Close Filter
  const handleCloseFilter = () => {
    setFilterError("");
    setIsFilterFormOpen(false);
  };

  return (
    <>
      <Navbar
        handleNewPage={handleNewPage}
        handleAdminLogin={handleAdminLogin}
        newPage={newPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <LoginForm
        isLoginFormOpen={isLoginFormOpen}
        loginError={loginError}
        handleLoginForm={handleLoginForm}
        handleCloseLogin={handleCloseLogin}
      />

      {newPage === "home" && <HomePage />}

      {newPage === "profiles" &&
        (isError ? (
          <Error handleNewPage={handleNewPage} />
        ) : (
          <ProfilesPage
            users={filteredUsers.length ? filteredUsers : users}
            handleMoreInfo={handleMoreInfo}
            isFiterFormOpen={isFilterFormOpen}
            setIsFilterFormOpen={setIsFilterFormOpen}
            handleFilterForm={handleFilterForm}
            filterError={filterError}
            handleCloseFilter={handleCloseFilter}
          />
        ))}

      {newPage === "profile" && <ProfilePage {...user} userRole={userRole} />}

      {newPage === "dashboard" &&
        (isError ? (
          <Error />
        ) : (
          <AdminPage users={users} handleMoreInfo={handleMoreInfo} />
        ))}

      {newPage === "form" && <FormPage />}
      <Footer
        handleNewPage={handleNewPage}
        handleAdminLogin={handleAdminLogin}
      />
    </>
  );
}
