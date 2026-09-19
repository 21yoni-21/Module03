function CategoryBar({ selected, onSelect }) {
  const categories = ["All", "Main", "Vegan", "Grill"];

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          style={{
            margin: "5px",
            padding: "8px 15px",
            fontWeight:
              category === selected ? "bold" : "normal",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;