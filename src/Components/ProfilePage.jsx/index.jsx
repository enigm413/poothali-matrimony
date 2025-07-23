import "../../Stylesheets/profilePage.css";
import "../../Stylesheets/Responsive/profilePage-query.css";
import Profile from "./Profile";

export default function ProfilePage({
  userRole,
  handleNewPage,
  getAge,
  mainImg,
  setMainImg,
  ...user
}) {
  return (
    <>
      <Profile
        userRole={userRole}
        handleNewPage={handleNewPage}
        getAge={getAge}
        mainImg={mainImg}
        setMainImg={setMainImg}
        {...user}
      />
    </>
  );
}
