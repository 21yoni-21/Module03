import DishList from "./DishList";
import CategoryBar from "./CategoryBar";
import Link from "next/link";

export default function MenuPage() {
  return (
    <main>
      <h1>Our Menu</h1>

      <p>Choose your favorite Ethiopian dishes.</p>

      <CategoryBar />

      <DishList />

      <nav>
        <Link href="/">Home</Link>{" "}
        <Link href="/cart">Cart</Link>{" "}
        <Link href="/checkout">Checkout</Link>
      </nav>
    </main>
  );
}