import { formatINR } from '../utils/currency';

export function WishlistPanel({ wishlist, onAddToCart }) {
  return (
    <section className="panel-block">
      <div className="panel-title">
        <h2>Wishlist</h2>
        <span>{wishlist.length} saved</span>
      </div>
      <div className="wishlist-list">
        {wishlist.length === 0 && <p className="empty">Save books to compare later.</p>}
        {wishlist.map((book) => (
          <button key={book.id} onClick={() => onAddToCart(book)}>
            <span>{book.title}</span>
            <strong>{formatINR.format(book.price)}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}
