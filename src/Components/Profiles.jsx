import { profileList } from "../assets/data";
import ProfileCard from "./ProfileCard";
import "../Stylesheets/profiles.css";

export default function Profiles() {
  return (
    <section className="section-profiles" id="section-profiles">
      <div className="wrapper profiles-title-wrapper">
        <h1 className="profiles-title">Browse Admin-Verified Profiles</h1>
        <div className="profiles-filter-wrapper">Filter &#11206;</div>
      </div>

      <div className="wrapper profiles-wrapper">
        {profileList.map((profile) => {
          return <ProfileCard {...profile} key={profile.id} />;
        })}
      </div>

      <ol className="wrapper pagination">
        {Array.from({ length: 6 }).map((_, index) => {
          const text = index === 0 ? "Previous" : index === 5 ? "Next" : index;
          return (
            <li key={index}>
              <button>{text}</button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
