import { AppLoading, Font } from "expo";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

const App = () => {
	const [fontHasBeenLoaded, setFontHasBeenLoaded] = useState(false);

	if (!fontHasBeenLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontHasBeenLoaded(true)}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
