import CartBadge from "./CartBadge";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>Addis Eats</h1>
        <p>Traditional Ethiopian Food</p>
      </div>

      <CartBadge />
    </header>
  );
}

export default Header;