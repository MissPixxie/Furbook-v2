import { useEffect, useState } from "react";

export const useFetchEvemts = () => {
  const [EventsData, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/events");
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
    getEvents();
  }, []);

  return { EventsData, error };
};
