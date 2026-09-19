import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Order submitted for ${form.name}`);
  }

  const validPhone = /^(?:\+251|0)9\d{8}$/.test(
    form.phone
  );

  return (
    <section>
      <h2>Delivery Information</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        <br />

        <div>
          <label>Phone</label>
          <br />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="09XXXXXXXX"
          />

          {form.phone && !validPhone && (
            <p>Use 09... or +2519...</p>
          )}
        </div>

        <br />

        <div>
          <label>Area</label>
          <br />

          <select
            name="area"
            value={form.area}
            onChange={handleChange}
          >
            <option value="Bole">Bole</option>
            <option value="Piassa">Piassa</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Megenagna">Megenagna</option>
            <option value="CMC">CMC</option>
          </select>
        </div>

        <br />

        <button
          type="submit"
          disabled={!validPhone}
        >
          Pay with TeleBirr
        </button>
      </form>
    </section>
  );
}

export default OrderForm;