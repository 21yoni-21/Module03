import Link from "next/link";

export default function CategoryBar() {
  return (
    <nav>
      <Link href="/menu">All</Link>{" "}
      <Link href="/menu?category=main">Main Dishes</Link>{" "}
      <Link href="/menu?category=vegetarian">
        Vegetarian
      </Link>
    </nav>
  );
}