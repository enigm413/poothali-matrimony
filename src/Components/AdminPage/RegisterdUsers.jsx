import { tableHeader } from "../../Data/dashboardData";

export default function RegisteredUsers({ users, setNewPage }) {
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
          <button className="btn" onClick={() => setNewPage("form")}>
            Add New User
          </button>
          <button className="btn">Notification &#11206; </button>
        </div>

        <table className="reg-user-table">
          <thead className="reg-user-table-header">
            <tr className="row">
              {tableHeader.map((header) => {
                const { id, title } = header;
                return <th key={id}>{title}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              const { id, name, age, religion, location } = user;
              return (
                <tr className="row" key={id}>
                  {[id, name, age, religion, location].map((val, index) => {
                    return <td key={index}>{val}</td>;
                  })}
                  <td>
                    <button
                      className="btn"
                      onClick={() => setNewPage("profile")}
                    >
                      More Info
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
