export default function ProfileForm({ handleProfileForm }) {
  return (
    <article className="form-wrapper">
      <h2 className="form-title">User Profile Form</h2>
      <form action="#" className="form" onSubmit={handleProfileForm}>
        <div className="input-wrapper">
          <label htmlFor="name">Name :</label>
          <input id="name" name="name" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="birthDate">Date Of Birth :</label>
          <input id="birthDate" name="birth_date" type="date" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="education">Education :</label>
          <input id="education" name="education" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="job">Job :</label>
          <input id="job" name="job" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="phone-number">Phone Number :</label>
          <input id="phone-number" name="phone_number" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="location">Location :</label>
          <input id="location" type="text" name="location" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="religion">Religion</label>
          <input id="religion" name="religion" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="birth-star">Birth star</label>
          <input id="birth-star" name="birth_star" type="text" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="father-name">Father's Name</label>
          <input id="father-name" name="father's_name" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="mother-name">Mother's Name</label>
          <input id="mother-name" name="mother's_name" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="father-job">Father's Job</label>
          <input id="father-job" name="father's_job" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="mother-job">Mother's Job</label>
          <input id="mother-job" name="mother's_job" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="siblings">Number Of Sibling</label>
          <input id="siblings" name="number_of_siblings" type="text" required />
        </div>

        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </article>
  );
}
