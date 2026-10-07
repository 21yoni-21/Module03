"use client";

import { useState } from "react";

export default function CategoryBar({ categories }) {
  const [selected, setSelected] = useState("All");

  return (
    <nav>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          style={{
            marginRight: "10px",
            fontWeight: selected === category ? "bold" : "normal",
          }}
        >
          {category}
        </button>
      ))}

      <p>Selected category: {selected}</p>
    </nav>
  );
}