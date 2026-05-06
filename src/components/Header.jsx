import { BookOpen, Heart, ShoppingCart } from 'lucide-react';

export function Header({ wishlistCount, cartCount }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-icon">
          <BookOpen size={23} />
        </span>
        <div>
          <h1>Campus Reads</h1>
          <p>Live Open Library catalog with INR student pricing</p>
        </div>
      </div>
      <div className="top-actions" aria-label="Store metrics">
        <span>
          <Heart size={17} />
          {wishlistCount}
        </span>
        <span>
          <ShoppingCart size={17} />
          {cartCount}
        </span>
      </div>
    </header>
  );
}
