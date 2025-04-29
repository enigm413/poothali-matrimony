export default function Pagination() {
  return (
    <ol className="wrapper pagination">
      {Array.from({ length: 6 }).map((_, index) => {
        const text = index === 0 ? "Previous" : index === 5 ? "Next" : index;
        return (
          <li key={index}>
            <button>{text}</button>
          </li>
        );
      })}
    </ol>
  );
}
