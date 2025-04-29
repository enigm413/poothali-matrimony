export default function Step({ number, title, text, src, alt }) {
  return (
    <li className="step">
      <div className="step-text-wrapper">
        <p className="step-number">{number}</p>
        <h3 className="step-title">{title}</h3>
        <p className="step-description">{text}</p>
      </div>

      <div className="step-img-wrapper">
        <img src={src} alt={alt} className="step-img" loading="lazy" />
      </div>
    </li>
  );
}
