import { fieldTitles } from "../../Data/profilesData.js";
import ProfileCategory from "./ProfileCategory";
import ProfileGallery from "./ProfileGallery";

export default function Profile({ userRole, ...profile }) {
  const {
    profile_img_01,
    profile_img_02,
    profile_img_03,
    name,
    birth_chart,
    ...data
  } = profile;
  return (
    <section className="section-profile">
      <div className="profile-wrapper wrapper">
        <div className="profile-header">
          <h1 className="profile-name">{name}</h1>
          <ProfileGallery
            first_img={profile_img_01}
            second_img={profile_img_02}
            third_img={profile_img_03}
            name={name}
          />

          <div className="birth-chart-wrapper">
            <h2 className="birth-chart-title">Birth Chart</h2>
            <div className="profile-img-wrapper">
              <img
                src={birth_chart}
                alt="birth chart"
                className="profile-img"
              />
            </div>
          </div>
        </div>

        <div className="profile-details-wrapper">
          {fieldTitles.map((fieldTitle) => {
            return (
              <ProfileCategory
                key={fieldTitle.id}
                userRole={userRole}
                {...fieldTitle}
                {...data}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
