export default function Pagination() {
  return (
    <ol className="pagination wrapper">
      <li>
        <button className="btn btn--pagination">Previous</button>
      </li>
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <li key={index + 1}>
            <button className="btn btn--pagination">{index + 1}</button>
          </li>
        );
      })}
      <li>
        <button className="btn btn--pagination">Next</button>
      </li>
    </ol>
  );
}
