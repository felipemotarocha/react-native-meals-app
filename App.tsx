import { useFonts } from "expo-font";
import React from "react";
import MealsNavigator from "./src/navigation/MealsNavigator";

const App = () => {
	const [fontHasBeenLoaded] = useFonts({
		"open-sans": require("./src/assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontHasBeenLoaded) {
		return null;
	}

	return <MealsNavigator />;
};

export default App;
