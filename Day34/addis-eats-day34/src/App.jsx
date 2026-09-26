import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  lazy,
  Suspense,
  Profiler,
} from "react";

import Layout from "./Layout";
import Home from "./Home";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Cart from "./Cart";
import Login from "./Login";
import NotFound from "./NotFound";

import AuthProvider from "./auth/AuthContext";
import ErrorBoundary from "./ErrorBoundary";

const Checkout = lazy(
  () => import("./Checkout")
);

const OrderConfirmation = lazy(
  () => import("./OrderConfirmation")
);

function Loading() {
  return (
    <section className="loading">
      <p>Loading...</p>
    </section>
  );
}

function MenuWithProfiler() {
  function handleRender(
    id,
    phase,
    actualDuration
  ) {
    console.log(
      "Profiler:",
      id,
      phase,
      actualDuration
    );
  }

  return (
    <Profiler
      id="Menu"
      onRender={handleRender}
    >
      <Menu />
    </Profiler>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />

            <Route
              path="menu"
              element={
                <ErrorBoundary>
                  <MenuWithProfiler />
                </ErrorBoundary>
              }
            />

            <Route
              path="menu/:id"
              element={
                <ErrorBoundary>
                  <DishDetail />
                </ErrorBoundary>
              }
            />

            <Route
              path="cart"
              element={
                <ErrorBoundary>
                  <Cart />
                </ErrorBoundary>
              }
            />

            <Route
              path="login"
              element={<Login />}
            />

            <Route
              path="checkout"
              element={
                <Suspense
                  fallback={<Loading />}
                >
                  <Checkout />
                </Suspense>
              }
            />

            <Route
              path="orders/:id"
              element={
                <Suspense
                  fallback={<Loading />}
                >
                  <OrderConfirmation />
                </Suspense>
              }
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;