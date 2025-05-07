// Importing necessary assets
import stepImg01 from "../assets/Images/Step-Images/step-01.webp";
import stepImg02 from "../assets/Images/Step-Images/step-02.webp";
import stepImg03 from "../assets/Images/Step-Images/step-03.webp";

// Define the stepLIst
const stepList = [
  {
    id: "step01",
    number: "01",
    title: "User Account Creation Process",
    text: "In order to create an account, users need to contact the Admin and provide the necessary details. Once the Admin receives the information, your account will be set up.",
    src: stepImg01,
    alt: "A women working on laptop while on a call",
  },

  {
    id: "step02",
    number: "02",
    title: "User Account Activation & Access",
    text: "Once the Admin sets up the account, you will receive a WhatsApp notification. You can now log in using the username and password to access the platform and browse available profiles.",
    src: stepImg02,
    alt: "A women smiling with coffee while working on laptop",
  },

  {
    id: "step03",
    number: "03",
    title: "Profile Interest & Contact Request",
    text: "If you find an interesting profile, you must like the profile and contact the Admin to request the contact and address details. After verification, the Admin will share the necessary information via WhatsApp.",
    src: stepImg03,
    alt: "A person chat on phone",
  },
];

// Function to define How It Work Component
export default function HowItWorks() {
  return (
    <section className="section-how-it-works" id="section-how-it-works">
      <div className="wrapper title-wrapper justify-content--center">
        <h2 className="section-title">how it works</h2>
      </div>

      <div className="wrapper steps">
        {stepList.map((step) => {
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
