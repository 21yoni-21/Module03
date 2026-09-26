
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { useCartStore } from "./Cart/cartStore";
import { useAuth } from "./auth/useAuth";
import { placeOrder } from "./api/orders";
import Field from "./checkout/Field.jsx";
import {
  validate,
  AREAS,
} from "./checkout/validate";

function Checkout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const items = useCartStore(
    (state) => state.items
  );

  const clear = useCartStore(
    (state) => state.clear
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
    notes: "",
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const total = useMemo(() => {
    return items.reduce(
      (sum, item) =>
        sum + item.priceETB * item.quantity,
      0
    );
  }, [items]);

  const errors = useMemo(() => {
    return validate(form);
  }, [form]);

  useEffect(() => {
    if (user?.name && !form.name) {
      setForm((current) => ({
        ...current,
        name: user.name,
      }));
    }
  }, [user, form.name]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setServerError("");
  }

  function handleBlur(name) {
    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    setServerError("");

    const currentErrors = validate(form);

    if (Object.keys(currentErrors).length > 0) {
      const firstError =
        Object.keys(currentErrors)[0];

      setTouched((current) => {
        const allTouched = {
          ...current,
        };

        Object.keys(currentErrors).forEach(
          (field) => {
            allTouched[field] = true;
          }
        );

        return allTouched;
      });

      document
        .getElementById(firstError)
        ?.focus();

      return;
    }

    if (submitting) {
      return;
    }

    setSubmitting(true);

    try {
      const order = await placeOrder({
        ...form,
        items,
        total,
      });

      clear();

      navigate(`/orders/${order.id}`, {
        replace: true,
      });
    } catch (error) {
      setServerError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (items.length === 0) {
    return (
      <section className="checkout">
        <h2>Checkout</h2>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h2>Checkout</h2>

      {submitted &&
        Object.keys(errors).length > 0 && (
          <div
            className="summary"
            role="alert"
          >
            <p>
              Please fix{" "}
              {Object.keys(errors).length} fields:
            </p>

            <ul>
              {Object.entries(errors).map(
                ([field, message]) => (
                  <li key={field}>
                    <a href={`#${field}`}>
                      {message}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

      {serverError && (
        <p
          className="server-error"
          role="alert"
        >
          {serverError}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <Field
          label="Name"
          name="name"
          error={
            touched.name
              ? errors.name
              : undefined
          }
        >
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            onBlur={() =>
              handleBlur("name")
            }
            aria-invalid={
              touched.name &&
              !!errors.name
            }
            aria-describedby={
              touched.name && errors.name
                ? "name-error"
                : undefined
            }
            autoComplete="name"
          />
        </Field>

        <Field
          label="TeleBirr number"
          name="phone"
          error={
            touched.phone
              ? errors.phone
              : undefined
          }
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            onBlur={() =>
              handleBlur("phone")
            }
            placeholder="0911234567"
            aria-invalid={
              touched.phone &&
              !!errors.phone
            }
            aria-describedby={
              touched.phone && errors.phone
                ? "phone-error"
                : undefined
            }
            autoComplete="tel"
          />
        </Field>

        <Field
          label="Delivery area"
          name="area"
          error={
            touched.area
              ? errors.area
              : undefined
          }
        >
          <select
            id="area"
            name="area"
            value={form.area}
            onChange={handleChange}
            onBlur={() =>
              handleBlur("area")
            }
            aria-invalid={
              touched.area &&
              !!errors.area
            }
            aria-describedby={
              touched.area && errors.area
                ? "area-error"
                : undefined
            }
          >
            {AREAS.map((area) => (
              <option
                key={area}
                value={area}
              >
                {area}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Notes (optional)"
          name="notes"
          error={
            touched.notes
              ? errors.notes
              : undefined
          }
        >
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            onBlur={() =>
              handleBlur("notes")
            }
            maxLength={200}
            rows={4}
          />
        </Field>

        <div className="checkout-total">
          <strong>
            Total: {total} ETB
          </strong>
        </div>

        <button
          type="submit"
          disabled={submitting}
        >
          {submitting
            ? "Sending your order..."
            : `Order — ${total} ETB`}
        </button>
      </form>
    </section>
  );
}

export default Checkout;

