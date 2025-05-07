import { useState } from "react";

// Import Necessary Component
import Pagination from "./Pagination";

// Import Nrcessary data
import { profileList } from "./Profiles";

//Define User Registeration Header
const userRegHeader = [
  { id: 1, title: "user id" },
  { id: 2, title: "name" },
  { id: 3, title: "age" },
  { id: 4, title: "Religion (caste)" },
  { id: 5, title: "location" },
  { id: 6, title: "action" },
];

export default function RegisteredUsers() {
  //Set the States
  const [userData, setuserData] = useState(profileList);

  //Function To Delete An Entry
  const deleteEntry = (id) => {
    const newUserData = userData.filter((user) => user.id !== id);
    setuserData(newUserData);
  };

  return (
    <section className="section-registered-users" id="section-registered-us">
      <div className="wrapper title-wrapper">
        <h2 className="dashboard-title">Registered Users</h2>
      </div>

      <div className="wrapper reg-users">
        <div className="reg-users-header">
          <input
            type="text"
            placeholder="Enter the User Id"
            className="searchbar"
          />
          <button className="btn">Add New User</button>
          <button className="btn">Notification &#11206; </button>
        </div>

        <table className="reg-user-table">
          <thead className="reg-user-table-header">
            <tr className="row">
              {userRegHeader.map((header) => {
                const { id, title } = header;
                return <th key={id}>{title}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {userData.map((user) => {
              const { id, name, age, religion, location } = user;
              return (
                <tr className="row" key={id}>
                  {[id, name, age, religion, location].map((val, index) => {
                    return <td key={index}>{val}</td>;
                  })}
                  <td>
                    <button className="btn" onClick={() => deleteEntry(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination />
    </section>
  );
}
