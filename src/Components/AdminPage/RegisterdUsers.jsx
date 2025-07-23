import { tableHeader } from "../../Data/dashboardData";

export default function RegisteredUsers({
  users,
  handleMoreInfo,
  handleNewPage,
  handleSearchedUsers,
  handleDeleteUser,
  getAge,
}) {
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
            onChange={handleSearchedUsers}
          />

          <button className="btn" onClick={() => handleNewPage("form")}>
            Add New User
          </button>
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
              const { id, name, birth_date, religion, location, phone_number } =
                user;
              return (
                <tr className="row" key={id}>
                  {[
                    name,
                    getAge(birth_date),
                    religion,
                    location,
                    phone_number,
                  ].map((val, index) => {
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

                  {/* <td>
                    <button className="btn btn--edit">
                      <ion-icon name="create"></ion-icon>
                    </button>
                  </td>

                  <td>
                    <button className="btn btn--delete">
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
