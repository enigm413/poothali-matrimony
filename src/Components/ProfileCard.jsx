import { profileDetails } from "../assets/data";

export default function ProfileCard({ id, img, name, ...data }) {
  return (
    <article className="profile-card" key={id}>
      <img src={img} alt={name} className="profile-card-img" loading="lazy" />

      <div className="profile-card-text-wrapper">
        <p className="profile-name">{name}</p>

        <ul className="profile-card-detail-list">
          {profileDetails.map((detail) => {
            const { id, icon } = detail;
            const text = data[id];
            return (
              <li className="profile-card-detail-item" key={id}>
                <span className="profile-card-detail-icon">
                  <ion-icon name={icon}></ion-icon>
                </span>
                <span className="profile-card-detail-text">{text} </span>
              </li>
            );
          })}
        </ul>

        <button className="info-btn">More Info</button>
      </div>
    </article>
  );
}
