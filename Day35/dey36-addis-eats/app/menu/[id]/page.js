import Link from "next/link";
import { notFound } from "next/navigation";

const dishes = {
  1: {
    name: "Doro Wot",
    description: "Spicy Ethiopian chicken stew.",
    price: 350,
  },
  2: {
    name: "Kitfo",
    description: "Traditional Ethiopian minced beef dish.",
    price: 400,
  },
  3: {
    name: "Shiro Wot",
    description: "Traditional chickpea stew.",
    price: 250,
  },
};

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes[id];

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <p>{dish.price} ETB</p>

      <Link href="/menu">Back to Menu</Link>
    </main>
  );
}