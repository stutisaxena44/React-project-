# Campus Reads

> A modern student book-store website built with React, Vite, and the Open Library API.

Campus Reads helps students discover books, compare prices, save favorites, manage a cart, and place demo orders from one clean interface. The website uses live book data from Open Library and turns it into a shopping-style catalog with INR pricing, wishlist support, student discounts, and order history.

## About The Website

Campus Reads is designed like a small online bookstore for college students. It focuses on a simple shopping experience where users can quickly find useful books, compare book details, and complete a demo checkout flow.

The app automatically searches Open Library for book results. Each book is displayed with a cover image, title, author, category, condition, rating, review count, price, and tags. If the live API is unavailable, the app falls back to a small offline catalog so the website still works.

## Main Features

- Live catalog powered by the Open Library API
- Search bar for finding books by topic or title
- Genre and author filters
- Sorting by featured results, low price, high price, and rating
- Responsive book cards with cover images and useful book details
- Wishlist system for saving favorite books
- Cart panel with quantity increase and decrease controls
- Automatic subtotal, student discount, shipping, and total calculation
- Free shipping logic for larger orders
- Order placement with generated order number
- Order history panel
- Offline fallback books when the API request fails
- Clean React component structure

## User Journey

1. The user lands on the Campus Reads dashboard.
2. The website loads books from Open Library.
3. The user searches for a topic such as `computer science`, `calculus`, or `business`.
4. The user filters books by genre or author.
5. The user adds interesting books to the wishlist.
6. The user adds selected books to the cart.
7. The cart shows subtotal, discount, shipping, and final total.
8. The user places an order.
9. The new order appears in the order history.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Frontend UI |
| Vite | Development server and production build |
| JavaScript | App logic |
| CSS | Custom responsive styling |
| Lucide React | Icons |
| Open Library API | Live book data |

## Project Structure

```text
src/
  api/
    openLibrary.js       # Fetches and normalizes Open Library book data
  components/
    BookCard.jsx         # Book card UI
    CatalogSection.jsx   # Main catalog area
    CatalogToolbar.jsx   # Search, filter, and sort controls
    CartPanel.jsx        # Cart, totals, and place order button
    Header.jsx           # Brand header and cart/wishlist counters
    OrderHistory.jsx     # Order history list
    Overview.jsx         # Website summary section
    Sidebar.jsx          # Cart, wishlist, and orders wrapper
    WishlistPanel.jsx    # Wishlist list and add-to-cart action
  constants/
    books.js             # API constants, fallback books, shipping rules
  hooks/
    useBookCatalog.js    # Loads books and prepares filter options
  utils/
    currency.js          # INR currency formatter
  App.jsx                # Main app state and layout
  main.jsx               # React entry point
  styles.css             # Website styling
```

## Installation

Clone the project and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL in your browser.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## API Details

Campus Reads uses the Open Library search endpoint:

```text
https://openlibrary.org/search.json
```

The API response is converted into book-store data inside `src/api/openLibrary.js`. The app generates demo prices, book conditions, tags, ratings, and cover image URLs from the Open Library response.

## Pricing Logic

The cart calculates:

- Subtotal from selected books and quantities
- 10% student discount
- Shipping charge when the cart total is below the free-shipping threshold
- Final payable total

The free-shipping threshold is stored in `src/constants/books.js`.

## Future Improvements

- Add real authentication for students
- Save wishlist and cart data in local storage
- Add checkout form validation
- Add payment gateway integration
- Add book detail pages
- Add admin controls for featured books and offers

## Author

Created by Vishal Pandey.
