// Importing necessary Files
import stepImg01 from "../assets/Images/Steps/step-01.webp";
import stepImg02 from "../assets/Images/Steps/step-02.webp";
import stepImg03 from "../assets/Images/Steps/step-03.webp";

// Define the stepLIst
export const steps = [
  {
    id: "STEP01",
    number: "01",
    title: "User Account Creation Process",
    text: "In order to create an account, users need to contact the Admin and provide the necessary details. Once the Admin receives the information, your account will be set up.",
    src: stepImg01,
    alt: "A women working on laptop while on a call",
  },

  {
    id: "STEP02",
    number: "02",
    title: "User Account Activation & Access",
    text: "Once the Admin sets up the account, you will receive a WhatsApp notification. You can now log in using the username and password to access the platform and browse available profiles.",
    src: stepImg02,
    alt: "A women smiling with coffee while working on laptop",
  },

  {
    id: "STEP03",
    number: "03",
    title: "Profile Interest & Contact Request",
    text: "If you find an interesting profile, you must like the profile and contact the Admin to request the contact and address details. After verification, the Admin will share the necessary information via WhatsApp.",
    src: stepImg03,
    alt: "A person chat on phone",
  },
];
