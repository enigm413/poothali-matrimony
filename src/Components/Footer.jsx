// Function to define Footer Component
export default function Footer() {
  return (
    <footer className="section-footer">
      <div className="container footer-container">
        <div className="footer-logo-wrapper">
          <img
            src="poothali-matrimony-logo.png"
            alt="logo-img"
            className="logo-img"
          />
        </div>

        <div>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#">How It Works</a>
            </li>
            <li className="footer-item">
              <a href="#">Gallery</a>
            </li>
            <li className="footer-item">
              <a href="#">Contact Us</a>
            </li>
            <li className="footer-item">
              <a href="#">Profiles</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="copy">
            Copyright © 2025 by Poothali Matrimony, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
