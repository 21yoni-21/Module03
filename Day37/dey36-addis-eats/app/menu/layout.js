import Link from "next/link";

export default function MenuLayout({ children }) {
  return (
    <div className="menu-layout">
      <aside>
        <h2>Categories</h2>

        <nav>
          <Link href="/menu">All Dishes</Link>
          <Link href="/menu?category=main">Main Dishes</Link>
          <Link href="/menu?category=vegetarian">Vegetarian</Link>
        </nav>
      </aside>

      <section>{children}</section>
    </div>
  );
}