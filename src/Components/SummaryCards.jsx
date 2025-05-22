const summaryCards = [
  { id: 1, title: "total users", text: 1000 },
  { id: 2, title: "notifcations", text: 10 },
];

export default function SummaryCards() {
  return (
    <section className="section-summary-cards" id="section-admin-page">
      <div className="summary-cards wrapper">
        {summaryCards.map((card) => {
          const { id, title, text } = card;
          return (
            <article className="summary-card" key={id}>
              <p className="summary-card-title">{title}</p>
              <p className="summary-card-text">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
