// Function To Define Hero Component
export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-text-wrapper">
        <h1>Browse, Connect, Begin Your Journey Together</h1>
        <p>
          Find your perfect match. Discover handpicked profiles and let our
          matchmaker guide you to a genuine connection — heart to heart, soul to
          soul."
        </p>

        <a href="#">Find Your Perfect Match</a>
      </div>

      <div className="hero-img-wrapper">
        <img
          src="hero-img.webp"
          alt="A couples enjoying the sunsets at hill station"
          className="hero-img"
        />
      </div>
    </section>
  );
}
