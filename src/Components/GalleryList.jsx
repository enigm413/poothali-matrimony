import { galleryImages } from "../assets/data";
import GalleryItem from "./GalleryItem";

export default function GalleryList() {
  return (
    <ul className="gallery-wrapper wrapper">
      {galleryImages.map((galleryImg) => {
        const { id, ...props } = galleryImg;
        return <GalleryItem key={id} {...props} />;
      })}
    </ul>
  );
}
