function CategoryBar({
  selected,
  onSelect,
}) {
  const categories = [
    "All",
    "Traditional Stews & Wat",
    "Tibs & Grills",
    "Raw & Cured Delicacies / Kitfo",
    "Fasting & Vegan / Tsom",
    "Beverages & Tej",
  ];

  return (
    <div className="category-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={
            category === selected
              ? "active-category"
              : ""
          }
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;