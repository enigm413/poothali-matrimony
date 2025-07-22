export default function ProfileCard({ handleMoreInfo, ...profile }) {
  const { profile_img_01, name, age, religion, location } = profile;
  return (
    <article className="profile-card">
      <div className="profile-card-img-wrapper">
        <img
          src={profile_img_01}
          alt={name}
          className="profile-card-img"
          loading="lazy"
        />
      </div>

      <div className="profile-card-text-wrapper">
        <p className="profile-card-title">{name}</p>

        <ul className="profile-card-content-wrapper">
          <li>{age} Years</li>
          <li>{religion}</li>
          <li>{location}</li>
        </ul>
        <button
          href="#"
          className="btn btn--info"
          onClick={() => {
            handleMoreInfo(profile);
          }}
        >
          More Info
        </button>
      </div>
    </article>
  );
}
