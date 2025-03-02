import { Dog } from "@/constants/types";
import { useEffect, useState } from "react";

export const useFetchDogs = () => {
	const [dogsData, setDogData] = useState<Dog[]>();
	const [error, setError] = useState("");

	useEffect(() => {
		const getDogs = async () => {
			try {
				const res = await fetch("http://10.0.2.2:8001/dogs", {
					method: "GET",
					headers: {
						"Cache-Control": "no-store",
					},
				});
				if (!res.ok) {
					throw new Error("Network error");
				}
				const data = await res.json();
				setDogData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
				if (error instanceof Error) {
					setError(error.message);
				}
			}
		};
		getDogs();
	}, []);

	return { dogsData, error };
};
