import { useEffect, useMemo, useState } from 'react';
import { fallbackBooks } from '../constants/books';
import { searchBooks } from '../api/openLibrary';

export function useBookCatalog(query) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadBooks() {
      setLoading(true);
      setError('');
      try {
        setBooks(await searchBooks(query, controller.signal));
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setBooks(fallbackBooks);
          setError('Live books could not be loaded. Showing a small offline catalog.');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    const delay = window.setTimeout(loadBooks, query.trim() ? 350 : 0);
    return () => {
      window.clearTimeout(delay);
      controller.abort();
    };
  }, [query]);

  const genres = useMemo(() => ['All', ...new Set(books.map((book) => book.genre))], [books]);
  const authors = useMemo(() => ['All', ...new Set(books.map((book) => book.author))], [books]);

  return { books, genres, authors, loading, error };
}
