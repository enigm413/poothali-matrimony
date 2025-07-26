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
    sessionStorage.getItem("currentRole") || "nonRegUser"
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
  const [userId, setUserId] = useState("");
  const [imageUrls, setImageUrls] = useState({});
  const [searchedUsers, setSeachedUser] = useState([]);
  const [mainImg, setMainImg] = useState("");

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
    } else if (email !== "poothalim@gmail.com") {
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
    const targetUsers = users.filter((profile) => {
      const minAge = Number(options.minAge) || 18;
      const maxAge = Number(options.maxAge) || 60;
      const age = getAge(profile.birth_date);

      return (
        (options.gender === "" || options.gender === profile.gender) &&
        (options.religion === "" || options.religion === profile.religion) &&
        age >= minAge &&
        age <= maxAge
      );
    });

    return targetUsers;
  };

  //Function To Handle Upload Files
  const handleUploadFiles = async (files, fileNames) => {
    for (let val = 0; val < files.length; val++) {
      const { error } = await supabase.storage
        .from("profile-imgs")
        .upload(`${userId}/${fileNames[val]}.jpg`, files[val]);

      if (error) {
        alert(`${error.message} for ${fileNames[val]}`);
      } else {
        const { data } = supabase.storage
          .from("profile-imgs")
          .getPublicUrl(`${userId}/${fileNames[val]}.jpg`);
        setImageUrls((prev) => ({
          ...prev,
          [fileNames[val]]: data.publicUrl,
        }));
        alert(`${fileNames[val]} has successfully uploaded`);
      }
    }
  };

  //Function To Get Age
  const getAge = (date) => {
    const birthDate = new Date(date);
    const currentDate = new Date();
    return currentDate.getFullYear() - birthDate.getFullYear();
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
    sessionStorage.setItem("currentRole", role);
  };

  // Function To Handle More Info
  const handleMoreInfo = (userData) => {
    if (userRole !== "nonRegUser") {
      handleNewPage("profile");
    } else {
      setIsLoginFormOpen(true);
    }
    setUser(userData);
    setMainImg(userData.profile_img_01);
    sessionStorage.setItem("currentProfile", JSON.stringify(userData));
    window.scrollTo({ top: 0 });
  };

  // Function To Handle Admin Page
  const handleAdminLogin = () => {
    if (userRole === "admin") {
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
    const filteredProfiles = handleProfileFilters(filterOptions);
    if (filteredProfiles.length === 0) {
      setFilterError("⚠️ Sorry, No profile within given age range");
    } else {
      filterForm.reset();
      setIsFilterFormOpen(false);
      setFilteredUsers(filteredProfiles);
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

  // Function To Handle Sign Up Form
  const handleSignUpForm = async (event) => {
    event.preventDefault();
    const signUpForm = event.currentTarget;
    const formdata = new FormData(signUpForm);
    const userData = Object.fromEntries(formdata);
    const { data, error } = await supabase.auth.signUp(userData);
    if (error) {
      alert(error.message);
    } else {
      setUserId(data?.user?.id);
      signUpForm.reset();
      alert("User Credential successfully Created");
    }
  };

  // Function To Handle Files Form
  const handleFilesForm = (event) => {
    event.preventDefault();
    const filesForm = event.currentTarget;
    const formdata = new FormData(filesForm);
    const userData = Object.fromEntries(formdata);

    const userFiles = Object.values(userData).filter((file) => {
      return file.name !== "";
    });

    const userFileNames = Object.keys(userData).filter((fileName) => {
      return userData[fileName].name != "";
    });

    handleUploadFiles(userFiles, userFileNames);
    filesForm.reset();
  };

  // Function To Handle Profile Form
  const handleProfileForm = async (event) => {
    event.preventDefault();
    const profileForm = event.currentTarget;
    const formdata = new FormData(profileForm);
    const formDataObj = Object.fromEntries(formdata);
    const userData = { user_id: userId, ...formDataObj, ...imageUrls };
    const { error } = await supabase.from("RegisteredUsers").insert(userData);
    if (error) {
      alert(error.message);
    } else {
      profileForm.reset();
      alert("User Registeration has completed");
      setImageUrls({});
      setUserId("");
    }
  };

  //Function To Handle Searched Users
  const handleSeachedUsers = (event) => {
    const targetId = event.target.value;
    const targetUsers = users.filter((user) => {
      return user.user_id === targetId;
    });
    setSeachedUser(targetUsers);
  };

  return (
    <>
      <Navbar
        handleNewPage={handleNewPage}
        handleAdminLogin={handleAdminLogin}
        newPage={newPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        userRole={userRole}
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
            getAge={getAge}
          />
        ))}

      {newPage === "profile" && (
        <ProfilePage
          {...user}
          userRole={userRole}
          handleNewPage={handleNewPage}
          getAge={getAge}
          mainImg={mainImg}
          setMainImg={setMainImg}
        />
      )}

      {newPage === "dashboard" &&
        (isError ? (
          <Error />
        ) : (
          <AdminPage
            users={searchedUsers.length ? searchedUsers : users}
            handleMoreInfo={handleMoreInfo}
            handleNewPage={handleNewPage}
            handleSearchedUsers={handleSeachedUsers}
            getAge={getAge}
          />
        ))}

      {newPage === "form" && (
        <FormPage
          handleSignUpForm={handleSignUpForm}
          handleFilesForm={handleFilesForm}
          handleProfileForm={handleProfileForm}
          handleNewPage={handleNewPage}
        />
      )}
      <Footer
        handleNewPage={handleNewPage}
        handleAdminLogin={handleAdminLogin}
      />
    </>
  );
}
