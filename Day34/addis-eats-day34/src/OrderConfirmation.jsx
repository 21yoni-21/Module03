import { Link, useParams } from "react-router-dom";

function OrderConfirmation() {
  const { id } = useParams();

  return (
    <section className="order-confirmation">
      <h1>Order Confirmed</h1>

      <p>
        Thank you. Your Addis Eats order has been
        received.
      </p>

      <p>
        Order number: <strong>{id}</strong>
      </p>

      <Link to="/menu">
        Back to Menu
      </Link>
    </section>
  );
}

export default OrderConfirmation;