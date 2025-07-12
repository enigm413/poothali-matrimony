export default function LoginForm({ isLoginFormOpen, setIsLoginFormOpen }) {
  console.log(isLoginFormOpen);
  return (
    <article
      className={`login-form-wrapper ${
        !isLoginFormOpen ? "display--none" : ""
      }`}
    >
      <form className="login-form">
        <p className="login-form-title">Login Form</p>
        <div className="login-input-wrapper">
          <label htmlFor="mail">Mail Address</label>
          <input type="email" id="mail" />
        </div>

        <div className="login-input-wrapper">
          <label htmlFor="mail">Password</label>
          <input type="password" id="password" />
        </div>

        <button
          className="btn btn--close"
          onClick={() => setIsLoginFormOpen(false)}
        >
          <ion-icon name="close"></ion-icon>
        </button>

        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </article>
  );
}
