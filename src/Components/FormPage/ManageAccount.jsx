import SignUpForm from "./SignUpForm";
import FilesForm from "./FilesForm";
import ProfileForm from "./ProfileForm";

export default function ManageUserAccount({
  handleSignUpForm,
  handleFilesForm,
  handleProfileForm,
  handleNewPage,
}) {
  return (
    <section className="section-form">
      <div className="wrapper title-wrapper">
        <h1 className="form-page-title">Manage User Accounts</h1>
        <button className="btn" onClick={() => handleNewPage("dashboard")}>
          Admin Dashboard
        </button>
      </div>

      <div className="form-list">
        <SignUpForm handleSignUpForm={handleSignUpForm} />
        <FilesForm handleFilesForm={handleFilesForm} />
        <ProfileForm handleProfileForm={handleProfileForm} />
      </div>
    </section>
  );
}
