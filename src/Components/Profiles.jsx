// Import Neceaary Components
import Pagination from "./Pagination";

// Import necessary Assets
import profileImg01 from "../assets/Images/Profiles/profile-01.webp";
import profileImg02 from "../assets/Images/Profiles/profile-02.webp";
import profileImg03 from "../assets/Images/Profiles/profile-03.webp";

// Import necessary Components
import ProfileCard from "./ProfileCard";

//Defining Profile List
export const profileList = [
  {
    id: 1,
    img: profileImg01,
    name: "Arun Krishnan",
    age: "30 Years",
    location: "Ernakulam, Kerala",
    job: "Software Engineer",
    religion: "Hindu (Menon)",
  },

  {
    id: 2,
    img: profileImg02,
    name: "Anjali Nair",
    age: "27 Years",
    location: "Kochi, Kerala",
    job: "School Counselor",
    religion: "Hindu (Nair)",
  },

  {
    id: 3,
    img: profileImg03,
    name: "Maria Thomas",
    age: "26 Years",
    location: "Ernakulam, Kerala",
    job: "HR Executive",
    religion: "Christian",
  },
];

export default function Profiles() {
  return (
    <section className="section-profiles" id="section-profiles">
      <div className="title-wrapper wrapper justify-content--space-between ">
        <h1 className="profiles-title">Browse Admin-Verified Profiles</h1>
        <button className="btn btn--filter">Filter &#11206;</button>
      </div>

      <div className="profiles-wrapper wrapper">
        {profileList.map((profile) => {
          return <ProfileCard key={profile.id} {...profile} />;
        })}
      </div>

      <Pagination />
    </section>
  );
}
