import Link from "next/link";
import { Suspense } from "react";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";
import FilterShell from "./FilterShell";

export const revalidate = 3600;

const dishes = [
  {
    id: "1",
    name: "Doro Wot",
    description: "Spicy Ethiopian chicken stew.",
    price: 350,
  },
  {
    id: "2",
    name: "Kitfo",
    description: "Traditional Ethiopian minced beef dish.",
    price: 400,
  },
  {
    id: "3",
    name: "Shiro Wot",
    description: "Traditional chickpea stew.",
    price: 250,
  },
];

async function getDishes() {
  return dishes;
}

function DishSkeleton() {
  return (
    <div>
      <h2>Loading dishes...</h2>
      <p>Please wait while the dishes arrive.</p>
    </div>
  );
}

export default async function MenuPage() {
  const menuDishes = await getDishes();

  return (
    <main>
      <h1>Our Menu</h1>

      <p>Choose your favorite Ethiopian dishes.</p>

      <CategoryBar
        categories={["All", "Main Dishes", "Vegetarian"]}
      />

      <Suspense fallback={<DishSkeleton />}>
        <FilterShell>
          <DishList dishes={menuDishes} />
        </FilterShell>
      </Suspense>

      <nav>
        <Link href="/">Home</Link>{" "}
        <Link href="/cart">Cart</Link>{" "}
        <Link href="/checkout">Checkout</Link>
      </nav>
    </main>
  );
}