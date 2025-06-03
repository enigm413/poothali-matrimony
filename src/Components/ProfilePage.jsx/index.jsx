import "../../Stylesheets/profilePage.css";
import Profile from "./Profile";

export default function ProfilePage({ ...user }) {
  return (
    <>
      <Profile {...user} />
    </>
  );
}
