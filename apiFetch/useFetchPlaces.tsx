import { useEffect, useState } from "react";

export const useFetchPlaces = () => {
  const [placesData, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/places");
        if (!res.ok) {
          throw new Error("Network error");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };
    getPlaces();
  }, []);

  return { placesData, error };
};
