import { useEffect, useState } from "react";
import { loadDishes } from "../api";

export function useFetch(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const result = await loadDishes(
          category,
          controller.signal
        );

        setData(result);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      controller.abort();
    };
  }, [category]);

  return {
    data,
    loading,
    error,
  };
}