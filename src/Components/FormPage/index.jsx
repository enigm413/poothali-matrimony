import "../../Stylesheets/formPage.css";
import ManageAccount from "./ManageAccount.jsx";

export default function FormPage({
  handleSignUpForm,
  handleFilesForm,
  handleProfileForm,
  handleNewPage,
}) {
  return (
    <ManageAccount
      handleSignUpForm={handleSignUpForm}
      handleFilesForm={handleFilesForm}
      handleProfileForm={handleProfileForm}
      handleNewPage={handleNewPage}
    />
  );
}
