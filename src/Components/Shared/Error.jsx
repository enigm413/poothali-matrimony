import errorImg from "../../assets/Images/error.webp";

export default function Error({ handleNewPage }) {
  return (
    <article className="error-wrapper wrapper">
      <div className="error-text-wrapper">
        <p className="error-title">Oops! Something Went Wrong</p>
        <p className="error-text">
          We're having trouble loading the page right now. Please try again in a
          few minutes. If the issue continues, please contact the administrator.
        </p>

        <a href="#" className="btn" onClick={() => handleNewPage("home")}>
          Back To Home
        </a>
      </div>

      <div className="error-img-wrapper">
        <img src={errorImg} alt="An Error Image" className="error-img" />
      </div>
    </article>
  );
}
