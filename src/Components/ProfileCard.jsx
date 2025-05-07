export const profileDetails = [
  { id: "age", icon: "calendar-number-outline" },
  { id: "location", icon: "location-outline" },
  { id: "job", icon: "briefcase-outline" },
  { id: "religion", icon: "people-outline" },
];

export default function ProfileCard({ img, name, ...data }) {
  return (
    <article className="profile-card">
      <img src={img} alt={name} className="profile-card-img" loading="lazy" />

      <div className="profile-card-text-wrapper">
        <p className="profile-name">{name}</p>

        <ul className="profile-card-detail-list">
          {profileDetails.map((detail) => {
            const { id, icon } = detail;

            return (
              <li className="profile-card-detail-item" key={id}>
                <span className="profile-card-detail-icon">
                  <ion-icon name={icon}></ion-icon>
                </span>
                <span className="profile-card-detail-text">{data[id]}</span>
              </li>
            );
          })}
        </ul>

        <button className="btn btn--info">More Info</button>
      </div>
    </article>
  );
}
