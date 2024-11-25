import { useEffect, useState } from "react";

export const useFetchEvents = () => {
	const [eventsData, setData] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		const getEvents = async () => {
			try {
				const res = await fetch("http://10.0.2.2:8001/events");
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

	return { eventsData, error };
};
