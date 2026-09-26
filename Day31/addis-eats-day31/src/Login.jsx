import {
  useContext,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { AuthContext } from "./auth/AuthContext";

function Login() {
  const [phone, setPhone] =
    useState("");

  const {
    login,
    loading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from =
    location.state?.from?.pathname ??
    "/menu";

  async function handleSubmit(event) {
    event.preventDefault();

    if (!phone.trim()) {
      return;
    }

    await login(phone);

    navigate(from, {
      replace: true,
    });
  }

  return (
    <section className="login-page">
      <div className="login-card">
        <h1>Sign In</h1>

        <p>
          Sign in before going to checkout.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value)
            }
            placeholder="0912345678"
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;