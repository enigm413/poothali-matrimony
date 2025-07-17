export default function LoginForm({
  isLoginFormOpen,
  loginError,
  handleLoginForm,
  handleCloseLogin,
}) {
  return (
    <article
      className={`login-form-wrapper ${
        !isLoginFormOpen ? "display--none" : ""
      }`}
    >
      <form className="login-form" onSubmit={handleLoginForm}>
        <p className="login-form-title">Login Form</p>
        <div className="login-input-wrapper">
          <label htmlFor="mail">Mail Address</label>
          <input type="email" id="mail" name="email" required />
        </div>

        <div className="login-input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <p className={loginError ? "login-error" : "display--none"}>
          {loginError}
        </p>

        <button className="btn btn--close" onClick={handleCloseLogin}>
          <ion-icon name="close"></ion-icon>
        </button>

        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </article>
  );
}
