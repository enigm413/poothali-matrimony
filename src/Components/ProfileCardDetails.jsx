import { profileDetails } from "../assets/data";
import ProfileCardDetail from "./ProfileCardDetail";

export default function ProfileCardDetails({ ...data }) {
  return (
    <ul className="profile-card-detail-list">
      {profileDetails.map((detail) => {
        return <ProfileCardDetail key={detail.id} {...detail} {...data} />;
      })}
    </ul>
  );
}
