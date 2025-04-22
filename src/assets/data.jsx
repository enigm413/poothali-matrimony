//----------------------------------
//-------Import Gallery Images------
//----------------------------------

import galleryImg01 from "../assets/Images/Gallery/gallery-01.webp";
import galleryImg02 from "../assets/Images/Gallery/gallery-02.webp";
import galleryImg03 from "../assets/Images/Gallery/gallery-03.webp";
import galleryImg04 from "../assets/Images/Gallery/gallery-04.webp";
import galleryImg05 from "../assets/Images/Gallery/gallery-05.webp";
import galleryImg06 from "../assets/Images/Gallery/gallery-06.webp";

//----------------------------------
//---------Import Step Images-------
//----------------------------------

import stepImg01 from "../assets/Images/Step-Images/step-01.webp";
import stepImg02 from "../assets/Images/Step-Images/step-02.webp";
import stepImg03 from "../assets/Images/Step-Images/step-03.webp";

//----------------------------------
//-------Export Page Links----------
//----------------------------------

export const pageLinks = [
  {
    id: 1,
    href: "#section-how-it-works",
    text: "how it works",
  },

  {
    id: 2,
    href: "#section-gallery",
    text: "gallery",
  },

  {
    id: 3,
    href: "#section-profiles",
    text: "profiles",
  },

  {
    id: 4,
    href: "#section-contact",
    text: "contact us",
  },
];

//----------------------------------
//------Export Gallery Images-------
//----------------------------------

export const galleryImages = [
  {
    id: 1,
    src: galleryImg01,
    alt: "Gallery 01",
  },

  {
    id: 2,
    src: galleryImg02,
    alt: "Gallery 02",
  },

  {
    id: 3,
    src: galleryImg03,
    alt: "Gallery 03",
  },

  {
    id: 4,
    src: galleryImg04,
    alt: "Gallery 04",
  },

  {
    id: 5,
    src: galleryImg05,
    alt: "Gallery 05",
  },

  {
    id: 6,
    src: galleryImg06,
    alt: "Gallery 06",
  },
];

//----------------------------------
//---Export Admin Contact Options---
//----------------------------------

export const adminContactOptions = [
  {
    id: 1,
    icon: "call-sharp",
    text: "9633744685",
  },

  {
    id: 2,
    icon: "mail-open-sharp",
    text: "poothalim@gmail.com",
  },

  {
    id: 3,
    icon: "location-sharp",
    text: "Poothali Matrimony, Vendrapilli Lane MRA 107, Near South Post Office Puthiya Road, Eroor, 682306",
  },
];

//----------------------------------
//--------Export Step List----------
//----------------------------------

export const stepList = [
  {
    id: 1,
    number: "01",
    title: "User Account Creation Process",
    text: "In order to create an account, users need to contact the Admin and provide the necessary details. Once the Admin receives the information, your account will be set up.",
    src: stepImg01,
    alt: "A women calling on phone while working on laptop",
  },

  {
    is: 2,
    number: "02",
    title: "User Account Activation & Access",
    text: "Once the Admin sets up the account, you will receive a WhatsApp notification. You can now log in using the username and password to access the platform and browse available profiles.",
    src: stepImg02,
    alt: "A women smiling with coffee while working on laptop",
  },

  {
    number: "03",
    title: "Profile Interest & Contact Request",
    text: "If you finds an interesting profile, you must like the profile and contact the Admin to request the contact and address details. After verification, the Admin will share the necessary information via WhatsApp.",
    src: stepImg03,
    alt: "A person chat on phone",
  },
];
