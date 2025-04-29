export default function GalleryItem({ src, alt }) {
  return (
    <li className="gallery-img-wrapper gallery-01-wrapper">
      <img src={src} alt={alt} className="gallery-img" loading="lazy" />
    </li>
  );
}
