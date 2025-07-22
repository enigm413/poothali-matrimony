export default function SignUpForm({ handleSignUpForm }) {
  return (
    <article className="form-wrapper">
      <h2 className="form-title">User Sign Up Form</h2>
      <form action="#" className="form" onSubmit={handleSignUpForm}>
        <div className="input-wrapper">
          <label htmlFor="name">Email :</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Prefered Password :</label>
          <input id="password" name="password" type="password" required />
        </div>

        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </article>
  );
}
