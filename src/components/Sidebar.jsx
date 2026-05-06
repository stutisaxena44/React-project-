import { CartPanel } from './CartPanel';
import { OrderHistory } from './OrderHistory';
import { WishlistPanel } from './WishlistPanel';

export function Sidebar({
  cart,
  wishlist,
  orders,
  pricing,
  onAddToCart,
  onUpdateQuantity,
  onPlaceOrder,
}) {
  return (
    <aside className="side-panel">
      <CartPanel
        cart={cart}
        pricing={pricing}
        onUpdateQuantity={onUpdateQuantity}
        onPlaceOrder={onPlaceOrder}
      />
      <WishlistPanel wishlist={wishlist} onAddToCart={onAddToCart} />
      <OrderHistory orders={orders} />
    </aside>
  );
}
