import "../../Stylesheets/profilesPage.css";
import Profiles from "./Profiles";

export default function ProfilesPage({ users, handleMoreInfo }) {
  return (
    <>
      <Profiles users={users} handleMoreInfo={handleMoreInfo} />
    </>
  );
}
