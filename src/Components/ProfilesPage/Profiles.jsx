import ProfileCard from "./ProfileCard";

//Function To Define Profiles Components

export default function Profiles({ users, handleMoreInfo }) {
  return (
    <section className="section-profiles">
      <div className="title-wrapper wrapper justify-content--space-between ">
        <h1 className="profiles-title">Browse Admin-Verified Profiles</h1>
        <button className="btn btn--filter">Filter &#11206;</button>
      </div>

      <div className="profiles-wrapper wrapper">
        {users.map((user) => {
          return <ProfileCard handleMoreInfo={handleMoreInfo} {...user} />;
        })}
      </div>
    </section>
  );
}
