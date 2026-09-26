const API_URL = "https://addis-eats-backend.onrender.com/menu/";

export async function loadDishes(category = "All", signal) {
  const url =
    category === "All"
      ? API_URL
      : `${API_URL}?category=${encodeURIComponent(category)}`;

  const response = await fetch(url, {
    signal,
  });

  if (!response.ok) {
    throw new Error("Could not load the menu");
  }

  const result = await response.json();

  return result.data;
}