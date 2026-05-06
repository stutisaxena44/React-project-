export function Overview({ bookCount, categoryCount }) {
  return (
    <section className="overview">
      <div>
        <p className="eyebrow">Open Library powered</p>
        <h2>Search online books and buy them with student-friendly rupee pricing.</h2>
      </div>
      <div className="stat-grid">
        <div>
          <strong>{bookCount}</strong>
          <span>Loaded books</span>
        </div>
        <div>
          <strong>{categoryCount}</strong>
          <span>Categories</span>
        </div>
        <div>
          <strong>10%</strong>
          <span>Student discount</span>
        </div>
      </div>
    </section>
  );
}
