import heroImage from "../assets/hero-img.webp";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-text-wrapper">
        <h1>Browse, Connect, Begin Your Journey Together</h1>
        <p>
          Find your perfect match without signing up. Check out handpicked
          profiles, and let our matchmaker connect you - real people, real
          connections
        </p>

        <a href="#">Find Your Perfect Match</a>
      </div>

      <div className="hero-img-wrapper">
        <img
          src={heroImage}
          alt="A couples enjoying the sunsets at hill station"
          className="hero-img"
        />
      </div>
    </section>
  );
}
