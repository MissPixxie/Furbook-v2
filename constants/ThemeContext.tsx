import React, { createContext, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Appearance } from "react-native";

interface Props {
	children: React.ReactNode;
}

interface Theme {
	dark: boolean;
	colors: {
		primary: string;
		secondary: string;
		secondaryLight: string;
		background: string;
		card: string;
		gradientCard: readonly [string, string, ...string[]];
		gradientButton: readonly [string, string, ...string[]];
		inputs: string;
		text: string;
		textSecondary: string;
		border: string;
		notification: string;
		tabBar: readonly [string, string, ...string[]];
		drawer: Array<string>;
	};
}

interface MyTheme {
	dark: Theme;
	light: Theme;
}
interface Context {
	theme: Theme;
	toggleTheme: () => void;
}

const MyTheme: MyTheme = {
	dark: {
		dark: true,
		colors: {
			primary: "#373737",
			secondary: "#e2e2e2",
			secondaryLight: "#E5E5E5",
			background: "#151515",
			card: "#272727",
			gradientCard: ["#4a4a4a", "#212121"],
			gradientButton: ["#888888", "#3b3b3b"],
			inputs: "#272727",
			text: "#fff",
			textSecondary: "#b5b5b5",
			border: "rgb(199, 199, 204)",
			notification: "rgb(255, 69, 58)",
			tabBar: ["#252525", "#141414"],
			drawer: ["#3c3c3c", "#7d7d7d"],
		},
	},
	light: {
		dark: false,
		colors: {
			primary: "#f4f4f4",
			secondary: "#e2e2e2",
			secondaryLight: "#FEFEFE",
			background: "#f3f3f3",
			card: "#fff",
			gradientCard: ["#c9c9c9", "#fff"],
			gradientButton: ["#fff", "#e2e2e2"],
			inputs: "#fff",
			text: "#000",
			textSecondary: "#000",
			border: "rgb(199, 199, 204)",
			notification: "rgb(255, 69, 58)",
			tabBar: ["#bced95", "#fff"],
			drawer: ["#eaeaea", "#fff"],
		},
	},
};

export const ThemeContext = createContext<Context>({
	theme: MyTheme.light,
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<Theme>(MyTheme.light);

	useEffect(() => {
		const colorScheme = Appearance.getColorScheme();
		if (colorScheme === "dark") {
			setTheme(MyTheme.dark);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === MyTheme.light ? MyTheme.dark : MyTheme.light;
		setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
