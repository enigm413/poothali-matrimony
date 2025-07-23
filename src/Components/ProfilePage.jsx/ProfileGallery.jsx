import { useState } from "react";
import demoImg from "../../assets/Images/demo.webp";

export default function ProfileGallery({
  profile_img_01,
  profile_img_02,
  profile_img_03,
  mainImg,
  setMainImg,
}) {
  return (
    <div className="profile-gallery-wrapper">
      <div className="main-img-wrapper">
        <img
          src={!mainImg ? demoImg : mainImg}
          alt="Main Profile Image"
          className="main-img"
        />
      </div>

      <ul className="profile-gallery">
        {[profile_img_01, profile_img_02, profile_img_03].map((img, index) => {
          return (
            <li
              className="profile-img-wrapper"
              key={index}
              onClick={() => setMainImg(img)}
            >
              <img
                src={!img ? demoImg : img}
                alt="test image"
                className="profile-img"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
