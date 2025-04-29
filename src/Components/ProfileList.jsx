import { profileList } from "../assets/data";
import ProfileCard from "./ProfileCard";

export default function ProfileList() {
  return (
    <div className="wrapper profiles-wrapper">
      {profileList.map((profile) => {
        const { id, ...props } = profile;
        return <ProfileCard key={id} {...props} />;
      })}
    </div>
  );
}
