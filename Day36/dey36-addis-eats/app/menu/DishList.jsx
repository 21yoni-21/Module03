import Link from "next/link";

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

export default function DishList() {
  return (
    <div>
      {dishes.map((dish) => (
        <article key={dish.id}>
          <h2>{dish.name}</h2>

          <p>{dish.description}</p>

          <p>{dish.price} ETB</p>

          <Link href={`/menu/${dish.id}`}>
            View Dish
          </Link>
        </article>
      ))}
    </div>
  );
}