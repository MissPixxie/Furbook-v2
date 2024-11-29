import * as dotenv from "dotenv";

dotenv.config();

export default {
	expo: {
		name: "Furbook",
		slug: "furbook",
		android: {
			config: {
				googleMaps: {
					apiKey: process.env.GOOGLE_MAPS_API_KEY,
				},
			},
			package: "com.misspixxie.Furbook",
		},
		extra: {
			owner: "misspixxie",
			googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
			eas: {
				projectId: "3d270750-84ce-4f83-b00d-83fb00d0e0f7",
			},
		},
	},
};
