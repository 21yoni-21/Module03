import Link from "next/link";
import { Suspense } from "react";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";

export const revalidate = 3600;

function DishSkeleton() {
  return (
    <div>
      <h2>Loading dishes...</h2>
      <p>Please wait while the dishes arrive.</p>
    </div>
  );
}

export default function MenuPage() {
  return (
    <main>
      <h1>Our Menu</h1>

      <p>Choose your favorite Ethiopian dishes.</p>

      <CategoryBar />

      <Suspense fallback={<DishSkeleton />}>
        <DishList />
      </Suspense>

      <nav>
        <Link href="/">Home</Link>{" "}
        <Link href="/cart">Cart</Link>{" "}
        <Link href="/checkout">Checkout</Link>
      </nav>
    </main>
  );
}