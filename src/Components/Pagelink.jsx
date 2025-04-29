export default function Pagelink({ href, text }) {
  return (
    <li>
      <a href={href} className="navlink">
        {text}
      </a>
    </li>
  );
}
