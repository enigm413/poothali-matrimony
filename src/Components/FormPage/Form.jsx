export default function Form() {
  const getAge = (birthDate) => {
    const currentTime = new Date();
    const birthTime = new Date(birthDate);
    const calcAge = currentTime.getTime() - birthTime.getTime();
    return calcAge;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const birthDate = formdata.get("birthDate");
    const age = getAge(birthDate);
    const userData = Object.fromEntries(formdata);
    console.log(age);
    console.log(userData);
  };
  return (
    <section className="section-form">
      <div className="wrapper title-wrapper">
        <h1 className="reg-form-title">Registeration Form</h1>
      </div>

      <form action="#" className="wrapper reg-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name :</label>
          <input id="name" name="name" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="name">Email :</label>
          <input id="email" name="email" type="email" required />
        </div>

        {/* <div className="input-wrapper">
          <label htmlFor="password">Prefered Password :</label>
          <input id="password" name="password" type="password" required />
        </div>*/}

        <div className="input-wrapper">
          <label htmlFor="bithDate">Date Of Birth :</label>
          <input id="birthDate" name="birthDate" type="date" required />
        </div>

        {/*} <div className="input-wrapper">
          <label htmlFor="education">Education :</label>
          <input id="education" name="education" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="job">Job :</label>
          <input id="job" name="job" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="phone-number">Phone Number :</label>
          <input id="phone-number" name="phoneNumber" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="address">Address :</label>
          <textarea id="address" name="address" rows="25" required></textarea>
        </div>

        <div className="input-wrapper">
          <label htmlFor="profile-images">Profile Images :</label>
          <input
            id="profile-images"
            name="profileImages"
            type="file"
            required
            multiple
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="religion">Religion</label>
          <input id="religion" name="religion" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="caste">Caste</label>
          <input id="caste" name="caste" type="text" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="birth-star">Birth star</label>
          <input id="birth-star" name="birthStar" type="text" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="birth-chart">Birth Chart</label>
          <input id="birth-chart" name="birthChart" type="file" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="father-name">Father's Name</label>
          <input id="father-name" name="fatherName" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="mother-name">Mother's Name</label>
          <input id="mother-name" name="motherName" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="father-job">Father's Job</label>
          <input id="father-job" name="fatherJob" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="mother-job">Mother's Job</label>
          <input id="mother-job" name="motherJob" type="text" required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="siblings">Number Of Sibling</label>
          <input id="siblings" name="siblings" type="text" required />
        </div> */}

        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </section>
  );
}
