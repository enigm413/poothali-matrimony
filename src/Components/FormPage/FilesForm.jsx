export default function FileUploadForm({
  handleFilesForm,
  userId,
  isImagesUrl,
}) {
  return (
    <article className="form-wrapper">
      <h2 className="form-title">File Upload Form</h2>
      <form action="#" className="form" onSubmit={handleFilesForm}>
        <div className="input-wrapper">
          <label htmlFor="profile-image-01">Profile Image 1 :</label>
          <input
            id="profile-image-01"
            name="profile_img_01"
            type="file"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="profile-image-02">Profile Image 2 :</label>
          <input id="profile-image-01" name="profile_img_02" type="file" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="profile-image-03">Profile Image 3 :</label>
          <input id="profile-image-03" name="profile_img_03" type="file" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="birth-chart">Birth Chart</label>
          <input id="birth-chart" name="birth_chart" type="file" />
        </div>

        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </article>
  );
}
