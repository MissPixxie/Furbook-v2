import * as dotenv from "dotenv";

dotenv.config();

export default {
	expo: {
		name: "Furbook",
		slug: "furbook",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/images/icon.png",
		scheme: "myapp",
		userInterfaceStyle: "automatic",
		newArchEnabled: true,
		owner: "misspixxie",
		splash: {
			image: "./assets/images/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		ios: {
			supportsTablet: true,
		},
		android: {
			config: {
				googleMaps: {
					apiKey: process.env.GOOGLE_MAPS_API_KEY,
				},
			},
			package: "com.misspixxie.Furbook",
		},
		extra: {
			eas: {
				projectId: "56ac245b-e073-48d3-946f-8e710b4fd206",
			},
			googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
		},
	},
};
