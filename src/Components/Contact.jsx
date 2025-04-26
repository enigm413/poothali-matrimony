import { adminContactOptions } from "../assets/data";
import "../Stylesheets/contact.css";

// Function to define Contact Component
export default function Contact() {
  return (
    <section className="section-contact" id="section-contact">
      <div className="wrapper section-title-wrapper">
        <h2 className="section-title">Contact Us</h2>
      </div>

      <div className="wrapper contact-wrapper">
        <article className="contact-txt-wrapper">
          <h3 className="contact-title">Get in Touch & Set Up Your Account!</h3>
          <p className="contact-description">
            Need assistance or ready to set up your account? Our team is here to
            help! Reach out to us for any inquiries, support, or account setup
            guidance."
          </p>

          <ul className="contact-list">
            {adminContactOptions.map((contactOption) => {
              const { id, icon, text } = contactOption;
              return (
                <li className="contact-item" key={id}>
                  <span className="contact-icon">
                    <ion-icon name={icon}></ion-icon>
                  </span>
                  <span className="contact-text">{text}</span>
                </li>
              );
            })}
          </ul>
        </article>

        <div className="contact-img-wrapper"></div>
      </div>
    </section>
  );
}
