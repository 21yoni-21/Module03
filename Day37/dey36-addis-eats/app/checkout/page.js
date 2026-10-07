import Link from "next/link";

export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>

      <p>Complete your order here.</p>

      <p>
        Checkout is dynamic because it may depend on the user's
        current session and live pricing.
      </p>

      <Link href="/cart">Back to Cart</Link>
    </main>
  );
}