import { useState } from "react";
import { supabase } from "../../supabaseClient.js";

export default function LoginForm({
  isLoginFormOpen,
  setIsLoginFormOpen,
  handleLoginForm,
  handleNewPage,
  loginError,
  prevPage,
}) {
  // Function To Handle Close Button
  const handleCloseBtn = () => {
    setIsLoginFormOpen(false);
    handleNewPage(prevPage);
  };

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

        <p className="login-error">{loginError}</p>

        <button className="btn btn--close" onClick={handleCloseBtn}>
          <ion-icon name="close"></ion-icon>
        </button>

        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </article>
  );
}
