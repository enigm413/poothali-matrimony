import { galleryImages } from "../assets/data";
import "../Stylesheets/gallery.css";
import GalleryList from "./GalleryList";

// Function to define Gallery Component
export default function Gallery() {
  return (
    <section className="section-gallery" id="section-gallery">
      <div className="wrapper">
        <h2 className="section-title">Gallery</h2>
      </div>

      <GalleryList />
    </section>
  );
}
