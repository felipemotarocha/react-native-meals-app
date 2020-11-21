import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface CategoriesScreenProps {}

const CategoriesScreen: React.FunctionComponent<CategoriesScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>The Categories Screen!</Text>
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

export default CategoriesScreen;
