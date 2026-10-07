import Link from "next/link";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Addis Eats",
  description: "Ethiopian food ordering application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            <h1>Addis Eats</h1>

            <nav>
              <Link href="/">Home</Link>{" "}
              <Link href="/menu">Menu</Link>{" "}
              <Link href="/cart">Cart</Link>{" "}
              <Link href="/checkout">Checkout</Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer>
            <p>© 2026 Addis Eats</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}