import "../../Stylesheets/profilePage.css";
import "../../Stylesheets/Responsive/profilePage-query.css";
import Profile from "./Profile";

export default function ProfilePage({ userRole, ...user }) {
  return (
    <>
      <Profile userRole={userRole} {...user} />
    </>
  );
}
