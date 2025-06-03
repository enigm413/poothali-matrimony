export default function ProfileCard({ handleMoreInfo, ...profile }) {
  const { first_img, name, age, religion, location } = profile;
  return (
    <article className="profile-card">
      <div className="profile-card-img-wrapper">
        <img
          src={first_img}
          alt={name}
          className="profile-card-img"
          loading="lazy"
        />
      </div>

      <div className="profile-card-text-wrapper">
        <div className="profile-card-title-wrapper">
          <p className="name">{name}</p>
          <p className="age">{age} Years</p>
        </div>

        <ul className="profile-card-content-wrapper">
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
