import ContactList from "./ContactList";
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

          <ContactList />
        </article>

        <div className="contact-img-wrapper"></div>
      </div>
    </section>
  );
}
