import "../../Stylesheets/profilesPage.css";
import "../../Stylesheets/Responsive/profilesPage-query.css";
import Profiles from "./Profiles";

export default function ProfilesPage({
  users,
  handleMoreInfo,
  isFiterFormOpen,
  setIsFilterFormOpen,
  handleFilterForm,
  handleCloseFilter,
  filterError,
  getAge,
}) {
  return (
    <>
      <Profiles
        users={users}
        handleMoreInfo={handleMoreInfo}
        isFilterFormOpen={isFiterFormOpen}
        setIsFilterFormOpen={setIsFilterFormOpen}
        handleFilterForm={handleFilterForm}
        filterError={filterError}
        handleCloseFilter={handleCloseFilter}
        getAge={getAge}
      />
    </>
  );
}
