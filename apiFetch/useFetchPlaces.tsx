import { useEffect, useState } from "react";

export const useFetchPlaces = () => {
	const [placesData, setPlacesData] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		const getPlaces = async () => {
			try {
				const res = await fetch("http://10.0.2.2:8001/places", {
					method: "GET",
					headers: {
						"Cache-Control": "no-store",
					},
				});
				if (!res.ok) {
					throw new Error("Network error");
				}
				const data = await res.json();

				setPlacesData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
				if (error instanceof Error) {
					setError(error.message);
				}
			}
		};
		getPlaces();
	}, []);

	return { placesData, error };
};
