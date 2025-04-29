export default function ProfileCardDetail({ id, icon, ...data }) {
  const text = data[id];
  return (
    <li className="profile-card-detail-item">
      <span className="profile-card-detail-icon">
        <ion-icon name={icon}></ion-icon>
      </span>
      <span className="profile-card-detail-text">{text}</span>
    </li>
  );
}
