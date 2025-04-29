import { pageLinks } from "../assets/data";
import Pagelink from "./Pagelink";

export default function Pagelinks() {
  return (
    <ul className="navlink-list">
      {pageLinks.map((link) => {
        const { id, ...props } = link;
        return <Pagelink key={link.id} {...props} />;
      })}
    </ul>
  );
}
