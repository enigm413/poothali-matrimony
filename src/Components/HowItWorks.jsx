import { stepList } from "../assets/data";
import "../Stylesheets/howItWorks.css";

// Function to define How It Work Component
export default function HowItWorks() {
  return (
    <section className="section-how-it-works" id="section-how-it-works">
      <div className="wrapper">
        <h2 className="section-title">How It Works</h2>
      </div>

      <ul className="wrapper step-list-wrapper">
        {stepList.map((step) => {
          const { id, number, title, text, src, alt } = step;
          return (
            <li className="step" key={id}>
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
        })}
      </ul>
    </section>
  );
}
