import { Clock3 } from 'lucide-react';
import { formatINR } from '../utils/currency';

export function OrderHistory({ orders }) {
  return (
    <section className="panel-block">
      <div className="panel-title">
        <h2>Order History</h2>
        <Clock3 size={18} />
      </div>
      <div className="order-list">
        {orders.map((order) => (
          <div className="order" key={order.id}>
            <div>
              <strong>{order.id}</strong>
              <span>
                {order.date} · {order.items} items
              </span>
            </div>
            <div>
              <strong>{formatINR.format(order.total)}</strong>
              <span>{order.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
