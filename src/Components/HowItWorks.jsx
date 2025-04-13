// Function to define How It Work Component
export default function HowItWorks() {
  return (
    <section className="section-how-it-works">
      <div className="container section-title-wrapper">
        <h2>How It Works</h2>
      </div>

      <div className="container step-list-wrapper">
        <div className="step">
          <p className="step-number">01</p>
          <h3 className="step-title">User Account Creation Process</h3>
          <p className="step-description">
            In order to create an account, users need to contact the Admin and
            provide the necessary details. Once the Admin receives the
            information, your account will be set up.
          </p>
        </div>

        <div className="step-img-wrapper">
          <img
            src="Step-Images\step-01.webp"
            alt="A women calling on phone while working on laptop"
            className="step-img"
          />
        </div>

        <div className="step-img-wrapper">
          <img
            src="Step-Images\step-02.webp"
            alt="A women smiling with coffee while working on laptop"
            className="step-img"
          />
        </div>

        <div className="step">
          <p className="step-number">02</p>
          <h3 className="step-title">User Account Activation & Access</h3>
          <p className="step-description">
            Once the Admin sets up the account, you will receive a WhatsApp
            notification. You can now log in using the username and password to
            access the platform and browse available profiles.
          </p>
        </div>

        <li className="step">
          <p className="step-number">03</p>
          <h3 className="step-title">Profile Interest & Contact Request</h3>
          <p className="step-description">
            If you finds an interesting profile, you must like the profile and
            contact the Admin to request the contact and address details. After
            verification, the Admin will share the necessary information via
            WhatsApp.
          </p>
        </li>

        <div className="step-img-wrapper">
          <img
            src="Step-Images\step-03.webp"
            alt="A person chat on phone"
            className="step-img"
          />
        </div>
      </div>
    </section>
  );
}
