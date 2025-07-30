export default function FilterForm({
  isFilterFormOpen,
  handleFilterForm,
  handleCloseFilter,
  filterError,
}) {
  return (
    <article className="filter-form-wrapper">
      <form
        className={`filter-form ${!isFilterFormOpen ? "display--none" : ""}`}
        onSubmit={handleFilterForm}
      >
        <p className="filter-form-title">Profile Fiters</p>

        <div className="filter-input-wrapper">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="filter-input-wrapper">
          <label htmlFor="religion">Religion (caste)</label>
          <select name="religion" id="religion">
            <option value="">All</option>
            <option value="Hindu (Nair)">Hindu (Nair)</option>
            <option value="Hindu (SNDP)">Hindu (SNDP)</option>
            <option value="Christian">Christian</option>
          </select>
        </div>

        <div className="filter-input-wrapper">
          <label htmlFor="min-age">Minimum Age</label>
          <input type="number" id="min-age" name="minAge" />
        </div>

        <div className="filter-input-wrapper">
          <label htmlFor="max-age">Maximum Age</label>
          <input type="number" id="max-age" name="maxAge" />
        </div>

        <p className={`filter-error ${!filterError ? "display--none" : ""}`}>
          {filterError}
        </p>

        <button className="btn btn--close" onClick={handleCloseFilter}>
          <ion-icon name="close"></ion-icon>
        </button>

        <button type="submit" className="btn btn--submit">
          Submit
        </button>
      </form>
    </article>
  );
}
