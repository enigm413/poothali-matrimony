import ProfileCardDetails from "./ProfileCardDetails";

export default function ProfileCard({ img, name, ...data }) {
  return (
    <article className="profile-card">
      <img src={img} alt={name} className="profile-card-img" loading="lazy" />

      <div className="profile-card-text-wrapper">
        <p className="profile-name">{name}</p>

        <ProfileCardDetails {...data} />

        <button className="info-btn">More Info</button>
      </div>
    </article>
  );
}
