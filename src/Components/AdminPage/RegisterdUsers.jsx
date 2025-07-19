import { tableHeader } from "../../Data/dashboardData";

export default function RegisteredUsers({ users, handleMoreInfo }) {
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
                  {[name, age, religion, location].map((val, index) => {
                    return <td key={index}>{val}</td>;
                  })}
                  <td>
                    <button
                      className="btn"
                      onClick={() => handleMoreInfo(user)}
                    >
                      More Info
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn--edit"
                      onClick={() => handleNewPage("profile")}
                    >
                      <ion-icon name="create"></ion-icon>
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn--delete"
                      onClick={() => handleNewPage("profile")}
                    >
                      <ion-icon name="close"></ion-icon>
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
