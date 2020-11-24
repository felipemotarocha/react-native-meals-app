import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface FavoritesScreenProps {}

const FavoritesScreen: React.FunctionComponent<FavoritesScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>The Favorites Screen!</Text>
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

export default FavoritesScreen;
