import { galleryImages } from "../assets/data";
import "../Stylesheets/gallery.css";

// Function to define Gallery Component
export default function Gallery() {
  return (
    <section className="section-gallery" id="section-gallery">
      <div className="wrapper">
        <h2 className="section-title">Gallery</h2>
      </div>

      <ul className="gallery-wrapper wrapper">
        {galleryImages.map((img) => {
          const { id, src, alt } = img;
          return (
            <li className="gallery-img-wrapper gallery-01-wrapper" key={id}>
              <img src={src} alt={alt} className="gallery-img" loading="lazy" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
