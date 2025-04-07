export default function HowItWorks() {
  return (
    <section className="section-how-it-works">
      <div className="container section-title-wrapper">
        <h2>How It Works</h2>
      </div>

      <div className="container step-list-wrapper">
        <div className="step-img-wrapper"></div>
        <ol className="step-list">
          <li className="step">
            <p className="step-number">01</p>
            <h3 className="step-title">User Account Creation Process</h3>
            <p className="step-description">
              Users must contact the Admin via WhatsApp to create an account.
              The Admin will ask for specific details, including the preferred
              username and password. As soon as the Admin receives the required
              information, an account will be created.
            </p>
            <span className="arrow-icon right-arrow">
              <ion-icon name="arrow-redo"></ion-icon>
            </span>
          </li>

          <li className="step step--2">
            <p className="step-number">02</p>
            <h3 className="step-title">User Account Activation & Access</h3>
            <p className="step-description">
              Users receive a WhatsApp notification once the account is set up
              by the Admin. Users can then log in with their username and
              password to access the platform, where they can browse available
              profiles.
            </p>
            <span className="arrow-icon left-arrow">
              <ion-icon name="arrow-undo"></ion-icon>
            </span>
          </li>

          <li className="step step--3">
            <p className="step-number">03</p>
            <h3 className="step-title">Profile Interest & Contact Request</h3>
            <p className="step-description">
              If a user finds an interesting profile, user need to like the
              profile and contact the Admin to request the contact details and
              address information of the profile. Upon verification, the Admin
              will provide the necessary details via WhatsApp.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
