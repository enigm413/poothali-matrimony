import SummaryCards from "./SummaryCards";
import RegisteredUsers from "./RegisterdUsers";
import "../../Stylesheets/adminPage.css";

export default function AdminPage({
  users,
  handleMoreInfo,
  handleNewPage,
  handleSearchedUsers,
  getAge,
}) {
  return (
    <>
      <SummaryCards totalUsers={users.length} />
      <RegisteredUsers
        users={users}
        handleMoreInfo={handleMoreInfo}
        handleNewPage={handleNewPage}
        handleSearchedUsers={handleSearchedUsers}
        getAge={getAge}
      />
    </>
  );
}
