export default function ContactItem({ icon, text }) {
  return (
    <li className="contact-item">
      <span className="contact-icon">
        <ion-icon name={icon}></ion-icon>
      </span>
      <span className="contact-text">{text}</span>
    </li>
  );
}
