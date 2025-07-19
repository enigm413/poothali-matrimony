import { useState } from "react";

export default function ProfileGallery({
  first_img,
  second_img,
  third_img,
  name,
}) {
  const [mainImg, setMainImg] = useState(first_img);

  return (
    <div className="profile-gallery-wrapper">
      <div className="main-img-wrapper">
        <img src={mainImg} alt="Main Profile Image" className="main-img" />
      </div>

      <ul className="profile-gallery">
        {[first_img, second_img, third_img].map((img, index) => {
          return (
            <li
              className="profile-img-wrapper"
              key={index}
              onClick={() => setMainImg(img)}
            >
              <img src={img} alt="test image" className="profile-img" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
