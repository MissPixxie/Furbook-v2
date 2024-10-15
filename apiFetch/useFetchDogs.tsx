import { useEffect, useState } from "react";

export const useFetchDogs = () => {
  const [dogsData, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDogs = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/dogs");
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
    getDogs();
  }, []);

  return { dogsData, error };
};
