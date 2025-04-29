import "../Stylesheets/howItWorks.css";
import StepList from "./StepList";

// Function to define How It Work Component
export default function HowItWorks() {
  return (
    <section className="section-how-it-works" id="section-how-it-works">
      <div className="wrapper">
        <h2 className="section-title">How It Works</h2>
      </div>

      <StepList />
    </section>
  );
}
