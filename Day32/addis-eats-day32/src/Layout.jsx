import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <Nav />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;