// Function to define Contact Component
export default function Contact() {
  return (
    <section className="section-contact">
      <div className="container section-title-wrapper">
        <h2>Contact Us</h2>
      </div>
      <div className="container contact-wrapper">
        <div className="contact-txt-wrapper">
          <h3 className="contact-title">Get in Touch & Set Up Your Account!</h3>
          <p className="contact-description">
            Need assistance or ready to set up your account? Our team is here to
            help! Reach out to us for any inquiries, support, or account setup
            guidance."
          </p>
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-icon">
                <ion-icon name="call-sharp"></ion-icon>
              </span>
              <span>+91 9633744685</span>
            </li>

            <li className="contact-item">
              <span className="contact-icon">
                <ion-icon name="mail-open-sharp"></ion-icon>
              </span>
              <span>poothalim@gmail.com</span>
            </li>

            <li className="contact-item">
              <span className="contact-icon">
                <ion-icon name="location-sharp"></ion-icon>
              </span>
              <span className="contact-txt">
                Poothali Matrimony, Vendrapilli Lane MRA 107, Near South Post
                Office Puthiya Road, Eroor, 682306
              </span>
            </li>
          </ul>
        </div>

        <div className="contact-img-wrapper"></div>
      </div>
    </section>
  );
}
