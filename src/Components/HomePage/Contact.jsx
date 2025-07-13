import { contactOptions } from "../../Data/adminContactData";

// Function to define Contact Component
export default function Contact() {
  return (
    <section className="section-contact" id="section-contact">
      <div className="contact-wrapper wrapper">
        <article className="contact-txt-wrapper">
          <h2 className="contact-title">Get in Touch & Set Up Your Account!</h2>

          <p className="contact-description">
            Need assistance or ready to set up your account? Our team is here to
            help! Reach out to us for any inquiries, support, or account setup
            guidance."
          </p>

          <ul className="contact-list">
            {contactOptions.map((contactOption) => {
              const { id, icon, text } = contactOption;
              return (
                <li className="contact-item" key={id}>
                  <span className="contact-icon">
                    <ion-icon name={icon}></ion-icon>
                  </span>

                  <span>
                    <p className="contact-text">{text}</p>
                  </span>
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
