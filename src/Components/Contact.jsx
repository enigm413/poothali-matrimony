//Define ContactOptions
const contactOptions = [
  {
    id: "phone",
    icon: "call-sharp",
    href: "tel:9633744685",
    text: "9633744685",
  },
  {
    id: "mail",
    icon: "mail-open-sharp",
    href: "mailto:poothalim@gmail.com",
    text: "poothalim@gmail.com",
  },
  {
    id: "location",
    icon: "location-sharp",
    href: "",
    text: "Poothali Matrimony, Vendrapilli Lane MRA 107, Near South Post Office Puthiya Road, Eroor, 682306",
  },
];

// Function to define Contact Component
export default function Contact() {
  return (
    <section className="section-contact" id="section-contact">
      <div className="contact-wrapper wrapper">
        <article className="contact-txt-wrapper">
          <h2 className="section-title contact-title">Contact Us</h2>
          <h3 className="contact-sub-title">
            Get in Touch & Set Up Your Account!
          </h3>

          <p className="contact-description">
            Need assistance or ready to set up your account? Our team is here to
            help! Reach out to us for any inquiries, support, or account setup
            guidance."
          </p>

          <ul className="contact-list">
            {contactOptions.map((contactOption) => {
              const { id, icon, href, text } = contactOption;
              return (
                <li className="contact-item" key={id}>
                  <span className="contact-icon">
                    <ion-icon name={icon}></ion-icon>
                  </span>
                  <span>
                    <a href={href} className="contact-link">
                      {text}
                    </a>
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
