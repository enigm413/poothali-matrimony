import { fieldTitles } from "../../Data/profilesData.js";
import ProfileCategory from "./ProfileCategory";
import ProfileGallery from "./ProfileGallery";

export default function Profile({ ...profile }) {
  const { first_img, second_img, third_img, birth_chart, ...data } = profile;
  return (
    <section className="section-profile">
      <div className="profile-wrapper wrapper">
        <div className="profile-header">
          <h1 className="profile-name">{profile.name}</h1>

          <ProfileGallery
            first_img={first_img}
            second_img={second_img}
            third_img={third_img}
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

          <div className="profile-btns">
            <button className="btn btn--profile">Edit Profile </button>
            <button className="btn btn--profile">Delete Profile</button>
          </div>
        </div>

        <div className="profile-details-wrapper">
          {fieldTitles.map((fieldTitle) => {
            return (
              <ProfileCategory key={fieldTitle.id} {...fieldTitle} {...data} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
