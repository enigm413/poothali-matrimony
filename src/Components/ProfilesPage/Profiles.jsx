import ProfileCard from "./ProfileCard";
import FilterForm from "./FilterForm";

//Function To Define Profiles Components

export default function Profiles({
  users,
  handleMoreInfo,
  handleFilterForm,
  handleCloseFilter,
  isFilterFormOpen,
  setIsFilterFormOpen,
  filterError,
  getAge,
}) {
  return (
    <section className="section-profiles">
      <div className="title-wrapper wrapper justify-content--space-between ">
        <h1 className="profiles-title">Browse Admin-Verified Profiles</h1>
        <button
          className="btn btn--filter"
          onClick={() => setIsFilterFormOpen(true)}
        >
          {window.innerWidth <= 625 ? (
            <ion-icon name="filter"></ion-icon>
          ) : (
            <>Filter &#11206;</>
          )}
        </button>
      </div>

      <FilterForm
        isFilterFormOpen={isFilterFormOpen}
        handleFilterForm={handleFilterForm}
        filterError={filterError}
        handleCloseFilter={handleCloseFilter}
      />

      <div className="profiles-wrapper wrapper">
        {users.map((user) => {
          return (
            <ProfileCard
              key={user.id}
              handleMoreInfo={handleMoreInfo}
              getAge={getAge}
              {...user}
            />
          );
        })}
      </div>
    </section>
  );
}
