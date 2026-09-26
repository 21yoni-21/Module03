import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole"
  });

  const [submitted, setSubmitted] = useState(false);

  const validPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validPhone || !form.name) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <section className="order-form-section">
      <h2>TeleBirr Delivery</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            TeleBirr Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="09... or +2519..."
            required
          />

          {form.phone && !validPhone && (
            <p className="error-message">
              Use 09... or +2519...
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="area">
            Delivery Area
          </label>

          <select
            id="area"
            name="area"
            value={form.area}
            onChange={handleChange}
          >
            <option value="Bole">Bole</option>
            <option value="Piassa">Piassa</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Megenagna">Megenagna</option>
            <option value="CMC">CMC</option>
            <option value="Mexico">Mexico</option>
          </select>
        </div>

        <button
          className="submit-button"
          type="submit"
          disabled={!validPhone || !form.name}
        >
          Pay with TeleBirr
        </button>

        {submitted && (
          <div className="success-message">
            <h3>Order information submitted!</h3>

            <p>
              Name: {form.name}
            </p>

            <p>
              Phone: {form.phone}
            </p>

            <p>
              Area: {form.area}
            </p>
          </div>
        )}
      </form>
    </section>
  );
}

export default OrderForm;