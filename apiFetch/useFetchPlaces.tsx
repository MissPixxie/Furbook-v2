import { useEffect, useState } from "react";

export const useFetchPlaces = () => {
	const [placesData, setPlacesData] = useState(null);
	const [error, setError] = useState("");
	console.log("usefetchplaces");

	useEffect(() => {
		const getPlaces = async () => {
			try {
				const res = await fetch("http://10.0.2.2:8001/places", {
					method: "GET",
					headers: {
						"Cache-Control": "no-store",
					},
				});
				console.log("Response Status:", res.status);
				console.log("Response Headers:", res.headers);
				if (!res.ok) {
					throw new Error("Network error");
				}
				const data = await res.json();
				console.log("Response Data:", data);
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
