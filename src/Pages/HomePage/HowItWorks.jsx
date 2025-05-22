import { steps } from "../../Data/stepListData";

// Function to define How It Work Component
export default function HowItWorks() {
  return (
    <section className="section-how-it-works" id="section-how-it-works">
      <div className="wrapper title-wrapper justify-content--center">
        <h2 className="section-title">how it works</h2>
      </div>

      <div className="wrapper steps">
        {steps.map((step) => {
          const { id, number, title, text, src, alt } = step;
          return (
            <article className="step" key={id}>
              <div className="step-text-wrapper">
                <p className="step-number">{number}</p>
                <h3 className="step-title">{title}</h3>
                <p className="step-description">{text}</p>
              </div>

              <div className="step-img-wrapper">
                <img src={src} alt={alt} className="step-img" loading="lazy" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
