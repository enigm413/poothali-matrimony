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
    text: "To create an account, contact the Admin and provide the necessary details. Once your information is received, the admin will be set up your account.",
    src: stepImg01,
    alt: "A women working on laptop while on a call",
  },

  {
    id: "STEP02",
    number: "02",
    title: "User Account Activation & Access",
    text: "After your account is created, you'll receive a message from the Admin. You can then log in using your username and password to access the platform and browse available profiles.",
    src: stepImg02,
    alt: "A women smiling with coffee while working on laptop",
  },

  {
    id: "STEP03",
    number: "03",
    title: "Profile Interest & Contact Request",
    text: "If you find a profile you're interested in, share the profile ID with the Admin to request contact details. After verification, the Admin will share the information with you via WhatsApp.",
    src: stepImg03,
    alt: "A person chat on phone",
  },
];
