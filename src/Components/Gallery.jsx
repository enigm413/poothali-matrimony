import gallery01Image from "../assets/Gallery/gallery-01.webp";
import gallery02Image from "../assets/Gallery/gallery-02.webp";
import gallery03Image from "../assets/Gallery/gallery-03.webp";
import gallery04Image from "../assets/Gallery/gallery-04.webp";
import gallery05Image from "../assets/Gallery/gallery-05.webp";
import gallery06Image from "../assets/Gallery/gallery-06.webp";

export default function Gallery() {
  return (
    <section className="section-gallery">
      <div className="container section-title-wrapper">
        <h2>Gallery</h2>
      </div>

      <ul className="gallery-wrapper container">
        <li className="gallery-img-wrapper gallery-01-wrapper">
          <img src={gallery01Image} alt="Gallery 01" className="gallery-img" />
        </li>

        <li className="gallery-img-wrapper gallery-02-wrapper">
          <img src={gallery02Image} alt="Gallery 02" className="gallery-img" />
        </li>

        <li className="gallery-img-wrapper gallery-03-wrapper">
          <img src={gallery03Image} alt="Gallery 03" className="gallery-img" />
        </li>

        <li className="gallery-img-wrapper">
          <img src={gallery04Image} alt="Gallery 04" className="gallery-img" />
        </li>

        <li className="gallery-img-wrapper">
          <img src={gallery05Image} alt="Gallery 05" className="gallery-img" />
        </li>

        <li className="gallery-img-wrapper">
          <img src={gallery06Image} alt="Gallery 06" className="gallery-img" />
        </li>
      </ul>
    </section>
  );
}
