import SummaryCards from "./SummaryCards";
import RegisteredUsers from "./RegisterdUsers";
import "../../Stylesheets/adminPage.css";

export default function AdminPage({ users, handleMoreInfo }) {
  return (
    <>
      <SummaryCards totalUsers={users.length} />
      <RegisteredUsers users={users} handleMoreInfo={handleMoreInfo} />
    </>
  );
}
