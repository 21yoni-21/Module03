import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <p className="hero-label">
          WELCOME TO ADDIS EATS
        </p>

        <h1>
          Ethiopian Food
          <br />
          Made Easy
        </h1>

        <p>
          Discover traditional Ethiopian dishes,
          browse our menu and order your favorite food.
        </p>

        <Link to="/menu" className="hero-button">
          Explore Menu
        </Link>
      </div>

      <div className="home-info">
        <div>
          <h3>Traditional Food</h3>
          <p>
            Enjoy Ethiopian dishes such as Doro Wat,
            Shiro, Kitfo and Tibs.
          </p>
        </div>

        <div>
          <h3>Easy Ordering</h3>
          <p>
            Select your favorite dishes and add them
            to your cart.
          </p>
        </div>

        <div>
          <h3>Simple Checkout</h3>
          <p>
            Complete your delivery information when
            you are ready.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;