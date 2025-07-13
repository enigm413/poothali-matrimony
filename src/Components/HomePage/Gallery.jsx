//Importing necessary Data
import { galleryImages } from "../../Data/galleryData";

// Function to define Gallery Component
export default function Gallery() {
  return (
    <section className="section-gallery" id="section-gallery">
      <div className="wrapper title-wrapper justify-content--center">
        <h2 className="section-title">gallery</h2>
      </div>

      <ul className="gallery-wrapper wrapper">
        {galleryImages.map((galleryImg) => {
          const { id, src, alt } = galleryImg;
          return (
            <li className="gallery-img-wrapper" key={id}>
              <img src={src} alt={alt} className="gallery-img" loading="lazy" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
