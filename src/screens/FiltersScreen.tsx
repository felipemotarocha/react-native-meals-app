import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface FiltersScreenProps {}

const FiltersScreen: React.FunctionComponent<FiltersScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>The Filters Screen!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default FiltersScreen;
