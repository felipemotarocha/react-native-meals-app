import { useFonts } from "expo-font";
import React from "react";
import { enableScreens } from "react-native-screens";

import MealsNavigator from "./src/navigation/MealsNavigator";

enableScreens();

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
