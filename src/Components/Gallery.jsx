export default function Gallery() {
  return (
    <section className="section-gallery">
      <div className="container section-title-wrapper">
        <h2>Gallery</h2>
      </div>

      <ul className="gallery-wrapper container">
        <li className="gallery-img-wrapper gallery-01-wrapper">
          <img
            src="Gallery\gallery-01.webp"
            alt="Gallery 01"
            className="gallery-img"
          />
        </li>

        <li className="gallery-img-wrapper gallery-02-wrapper">
          <img
            src="Gallery\gallery-02.webp"
            alt="Gallery 02"
            className="gallery-img"
          />
        </li>

        <li className="gallery-img-wrapper gallery-03-wrapper">
          <img
            src="Gallery\gallery-03.webp"
            alt="Gallery 03"
            className="gallery-img"
          />
        </li>

        <li className="gallery-img-wrapper">
          <img
            src="Gallery\gallery-04.webp"
            alt="Gallery 04"
            className="gallery-img"
          />
        </li>

        <li className="gallery-img-wrapper">
          <img
            src="Gallery\gallery-05.webp"
            alt="Gallery 05"
            className="gallery-img"
          />
        </li>

        <li className="gallery-img-wrapper">
          <img
            src="Gallery\gallery-06.webp"
            alt="Gallery 06"
            className="gallery-img"
          />
        </li>
      </ul>
    </section>
  );
}
