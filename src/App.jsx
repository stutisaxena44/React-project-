import { useEffect, useMemo, useState } from 'react';
import { CatalogSection } from './components/CatalogSection';
import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { Sidebar } from './components/Sidebar';
import { FREE_SHIPPING_THRESHOLD, initialOrders } from './constants/books';
import { useBookCatalog } from './hooks/useBookCatalog';
import './styles.css';

function App() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('All');
  const [author, setAuthor] = useState('All');
  const [sort, setSort] = useState('featured');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState(initialOrders);
  const { books, genres, authors, loading, error } = useBookCatalog(query);

  useEffect(() => {
    if (genre !== 'All' && !genres.includes(genre)) setGenre('All');
    if (author !== 'All' && !authors.includes(author)) setAuthor('All');
  }, [author, authors, genre, genres]);

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        return (
          (genre === 'All' || book.genre === genre) &&
          (author === 'All' || book.author === author)
        );
      })
      .sort((a, b) => {
        if (sort === 'price-low') return a.price - b.price;
        if (sort === 'price-high') return b.price - a.price;
        if (sort === 'rating') return b.rating - a.rating;
        return b.reviews - a.reviews;
      });
  }, [author, books, genre, sort]);

  const pricing = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
    const studentDiscount = subtotal > 0 ? subtotal * 0.1 : 0;
    const shipping = subtotal > FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 79;

    return {
      subtotal,
      studentDiscount,
      shipping,
      total: subtotal - studentDiscount + shipping,
    };
  }, [cart]);

  const addToCart = (book) => {
    setCart((items) => {
      const current = items.find((item) => item.id === book.id);
      if (current) {
        return items.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...items, { id: book.id, book, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const toggleWishlist = (book) => {
    setWishlist((items) => {
      if (items.some((item) => item.id === book.id)) {
        return items.filter((item) => item.id !== book.id);
      }
      return [...items, book];
    });
  };

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  const placeOrder = () => {
    if (!cart.length) return;

    const nextOrder = {
      id: `CR-${Math.floor(2000 + Math.random() * 7000)}`,
      date: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      items: cart.reduce((sum, item) => sum + item.quantity, 0),
      total: pricing.total,
      status: 'Processing',
    };

    setOrders((current) => [nextOrder, ...current]);
    setCart([]);
  };

  return (
    <main className="app-shell">
      <Header
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <Overview bookCount={books.length} categoryCount={genres.length - 1} />
      <section className="workspace">
        <CatalogSection
          books={filteredBooks}
          query={query}
          genre={genre}
          author={author}
          sort={sort}
          genres={genres}
          authors={authors}
          loading={loading}
          error={error}
          onQueryChange={setQuery}
          onGenreChange={setGenre}
          onAuthorChange={setAuthor}
          onSortChange={setSort}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
        />
        <Sidebar
          cart={cart}
          wishlist={wishlist}
          orders={orders}
          pricing={pricing}
          onAddToCart={addToCart}
          onUpdateQuantity={updateQuantity}
          onPlaceOrder={placeOrder}
        />
      </section>
    </main>
  );
}

export default App;
