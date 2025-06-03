function ProfileCategory({ category, fields, ...data }) {
  return (
    <article className="profile-category-wrapper">
      <h2 className="profile-category-title">{category} information</h2>

      <ul className="profile-detail-list">
        {fields.map((field) => {
          const { id, title } = field;
          return (
            <li className="profile-detail" key={id}>
              <span className="profile-detail-title">
                {title.replace(/_/g, " ")}
              </span>
              <span className="profile-detail-text">{data[title]}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
export default ProfileCategory;
