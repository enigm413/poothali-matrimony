// Import Necessary Component
import Pagination from "./Pagination";

//Define User Registration Header
const userRegHeader = [
  { id: 1, title: "User ID" },
  { id: 2, title: "name" },
  { id: 3, title: "age" },
  { id: 4, title: "Religion (caste)" },
  { id: 5, title: "location" },
  { id: 6, title: "action" },
];

export default function RegisteredUsers({ users }) {
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
          <a href="#" className="btn">
            Add New User
          </a>
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
            {users.map((user) => {
              const { $id, name, age, religion, location } = user;
              return (
                <tr className="row" key={$id}>
                  {[$id, name, age, religion, location].map((val, index) => {
                    return <td key={index}>{val}</td>;
                  })}
                  <td>
                    <a href="#" className="btn">
                      More Info
                    </a>
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
