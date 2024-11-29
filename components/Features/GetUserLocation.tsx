import GetLocation, {
	Location,
	LocationErrorCode,
	isLocationError,
} from "react-native-get-location";
import React, { useState } from "react";

export default function GetUserLocation() {
	const [loading, setLoading] = useState(false);
	const [location, setLocation] = useState<Location | null>(null);
	const [error, setError] = useState<LocationErrorCode | null>(null);

	const requestLocation = () => {
		setLoading(true);
		setLocation(null);
		setError(null);

		GetLocation.getCurrentPosition({
			enableHighAccuracy: true,
			timeout: 30000,
		})
			.then((newLocation) => {
				setLoading(false);
				setLocation(newLocation);
				console.log(newLocation);
			})
			.catch((ex) => {
				if (isLocationError(ex)) {
					const { code, message } = ex;
					console.warn(code, message);
					setError(code);
				} else {
					console.warn(ex);
				}
				setLoading(false);
				setLocation(null);
			});
	};

	return location;
}
