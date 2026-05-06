import { Filter, Search, UserRound } from 'lucide-react';

export function CatalogToolbar({
  query,
  genre,
  author,
  sort,
  genres,
  authors,
  onQueryChange,
  onGenreChange,
  onAuthorChange,
  onSortChange,
}) {
  return (
    <div className="toolbar">
      <label className="search-box">
        <Search size={19} />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search online books by title, author, or subject"
        />
      </label>
      <div className="filters" aria-label="Catalog filters">
        <label>
          <Filter size={16} />
          <select value={genre} onChange={(event) => onGenreChange(event.target.value)}>
            {genres.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          <UserRound size={16} />
          <select value={author} onChange={(event) => onAuthorChange(event.target.value)}>
            {authors.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <select value={sort} onChange={(event) => onSortChange(event.target.value)}>
          <option value="featured">Sort: Featured</option>
          <option value="price-low">Price: Low to high</option>
          <option value="price-high">Price: High to low</option>
          <option value="rating">Rating: Highest</option>
        </select>
      </div>
    </div>
  );
}
