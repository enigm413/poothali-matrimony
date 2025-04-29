import "../Stylesheets/profiles.css";
import ProfileList from "./ProfileList";
import Pagination from "./Pagination";

export default function Profiles() {
  return (
    <section className="section-profiles" id="section-profiles">
      <div className="wrapper profiles-title-wrapper">
        <h1 className="profiles-title">Browse Admin-Verified Profiles</h1>
        <div className="profiles-filter-wrapper">Filter &#11206;</div>
      </div>
      <ProfileList />
      <Pagination />
    </section>
  );
}
