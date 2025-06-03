import SummaryCards from "./SummaryCards";
import RegisteredUsers from "./RegisterdUsers";
import "../../Stylesheets/adminPage.css";

export default function adminPage({ users, setNewPage }) {
  return (
    <>
      <SummaryCards totalUser={users.length} />
      <RegisteredUsers users={users} setNewPage={setNewPage} />
    </>
  );
}
