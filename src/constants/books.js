export const API_BASE = 'https://openlibrary.org/search.json';

export const DEFAULT_SEARCH_TERM = 'college textbooks';

export const FREE_SHIPPING_THRESHOLD = 2500;

export const FALLBACK_COVER =
  'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80';

export const BOOK_SEARCH_FIELDS = [
  'key',
  'title',
  'author_name',
  'first_publish_year',
  'cover_i',
  'subject',
  'ratings_average',
  'ratings_count',
  'edition_count',
].join(',');

export const genreKeywords = [
  ['Computer Science', ['computer', 'programming', 'software', 'algorithm', 'data']],
  ['Science', ['science', 'biology', 'chemistry', 'physics', 'laboratory']],
  ['Mathematics', ['mathematics', 'calculus', 'algebra', 'statistics', 'geometry']],
  ['Business', ['business', 'finance', 'accounting', 'economics', 'management']],
  ['Literature', ['literature', 'fiction', 'poetry', 'novel', 'drama']],
  ['Social Science', ['sociology', 'history', 'politics', 'psychology', 'anthropology']],
];

export const fallbackBooks = [
  {
    id: 'fallback-algorithms',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    genre: 'Computer Science',
    condition: 'Used',
    price: 899,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 310,
    cover: FALLBACK_COVER,
    tags: ['Open Library', 'Course book'],
    reviewText: 'Reliable course pick with strong reader demand.',
  },
  {
    id: 'fallback-calculus',
    title: 'Calculus',
    author: 'Gilbert Strang',
    genre: 'Mathematics',
    condition: 'New',
    price: 1249,
    originalPrice: 1249,
    rating: 4.6,
    reviews: 144,
    cover: FALLBACK_COVER,
    tags: ['Open Library', 'STEM'],
    reviewText: 'Useful for problem practice and first-year revision.',
  },
];

export const initialOrders = [
  {
    id: 'CR-1024',
    date: 'Apr 22, 2026',
    items: 3,
    total: 2487,
    status: 'Delivered',
  },
];
