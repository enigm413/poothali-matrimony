import { adminContactOptions } from "../assets/data";
import ContactItem from "./ContactItem";

export default function ContactList() {
  return (
    <ul className="contact-list">
      {adminContactOptions.map((contactOption) => {
        const { id, ...props } = contactOption;
        return <ContactItem key={id} {...props} />;
      })}
    </ul>
  );
}
