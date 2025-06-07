import "./Stylesheets/general.css";

import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient.js";
import { Navbar, Footer, Error } from "./Components/Shared";
import HomePage from "./Components/HomePage/";
import AdminPage from "./Components/AdminPage/";
import ProfilesPage from "./Components/ProfilesPage/";
import ProfilePage from "./Components/ProfilePage.jsx";
import FormPage from "./Components/FormPage/index.jsx";

export default function App() {
  const [newPage, setNewPage] = useState("home");
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

  const handleMoreInfo = (userData) => {
    setUser(userData);
    setNewPage("profile");
  };

  return (
    <>
      <Navbar setNewPage={setNewPage} newPage={newPage} />
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
          <AdminPage users={users} setNewPage={setNewPage} />
        ))}

      {newPage === "profile" && <ProfilePage {...user} />}

      {newPage === "form" && <FormPage />}
      <Footer setNewPage={setNewPage} />
    </>
  );
}
