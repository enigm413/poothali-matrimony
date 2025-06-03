import { summaryCards } from "../../Data/dashboardData";

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
