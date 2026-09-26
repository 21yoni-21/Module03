import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";

function Layout() {
  return (
    <>
      <Header />
      <Nav />

      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  );
}

export default Layout;