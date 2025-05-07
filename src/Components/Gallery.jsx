// Import Necessary Assets
import galleryImg01 from "../assets/Images/Gallery/gallery-01.webp";
import galleryImg02 from "../assets/Images/Gallery/gallery-02.webp";
import galleryImg03 from "../assets/Images/Gallery/gallery-03.webp";
import galleryImg04 from "../assets/Images/Gallery/gallery-04.webp";
import galleryImg05 from "../assets/Images/Gallery/gallery-05.webp";
import galleryImg06 from "../assets/Images/Gallery/gallery-06.webp";

//Define Gallery Images
const galleryImages = [
  { id: "GAL01", src: galleryImg01, alt: "Gallery 01" },
  { id: "GAL02", src: galleryImg02, alt: "Gallery 02" },
  { id: "GAL03", src: galleryImg03, alt: "Gallery 03" },
  { id: "GAL04", src: galleryImg04, alt: "Gallery 04" },
  { id: "GAL05", src: galleryImg05, alt: "Gallery 05" },
  { id: "GAL06", src: galleryImg06, alt: "Gallery 06" },
];

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
