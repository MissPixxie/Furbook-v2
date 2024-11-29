import * as dotenv from "dotenv";

dotenv.config();

export default {
	expo: {
		name: "Furbook",
		slug: "furbook",
		extra: {
			googleMapsApiKey:
				process.env.GOOGLE_MAPS_API_KEY || "default-api-key",
			eas: {
				owner: "misspixxie",
				projectId: "3d270750-84ce-4f83-b00d-83fb00d0e0f7",
			},
		},
		android: {
			config: {
				googleMaps: {
					apiKey:
						process.env.GOOGLE_MAPS_API_KEY || "default-api-key",
				},
			},
			package: "com.misspixxie.Furbook",
		},
	},
};
