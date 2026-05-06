import { AlertCircle, Loader2 } from 'lucide-react';
import { FREE_SHIPPING_THRESHOLD } from '../constants/books';
import { formatINR } from '../utils/currency';
import { BookCard } from './BookCard';
import { CatalogToolbar } from './CatalogToolbar';

export function CatalogSection({
  books,
  query,
  genre,
  author,
  sort,
  genres,
  authors,
  loading,
  error,
  onQueryChange,
  onGenreChange,
  onAuthorChange,
  onSortChange,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) {
  return (
    <div className="catalog">
      <CatalogToolbar
        query={query}
        genre={genre}
        author={author}
        sort={sort}
        genres={genres}
        authors={authors}
        onQueryChange={onQueryChange}
        onGenreChange={onGenreChange}
        onAuthorChange={onAuthorChange}
        onSortChange={onSortChange}
      />

      <div className="results-line">
        <span>
          {loading ? (
            <>
              <Loader2 className="spin" size={16} />
              Fetching online books
            </>
          ) : (
            `${books.length} results`
          )}
        </span>
        <span>Free shipping over {formatINR.format(FREE_SHIPPING_THRESHOLD)}</span>
      </div>

      {error && (
        <div className="notice">
          <AlertCircle size={17} />
          {error}
        </div>
      )}

      <div className="book-grid">
        {books.map((book) => (
          <BookCard
            book={book}
            key={book.id}
            wishlisted={isWishlisted(book.id)}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
          />
        ))}
      </div>
    </div>
  );
}
