export default function SummaryCards({ totalUsers }) {
  return (
    <section className="section-summary-cards" id="section-admin-page">
      <div className="summary-cards wrapper">
        <article className="summary-card">
          <p className="summary-card-title">Total Profiles</p>
          <p className="summary-card-text">{totalUsers}</p>
        </article>
      </div>
    </section>
  );
}
