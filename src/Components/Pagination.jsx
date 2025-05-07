export default function Pagination() {
  return (
    <ol className="pagination wrapper">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <li key={index + 1}>
            <button className="btn btn--pagination">{index + 1}</button>
          </li>
        );
      })}
    </ol>
  );
}
