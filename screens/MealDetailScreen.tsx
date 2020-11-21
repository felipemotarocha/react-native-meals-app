import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface MealDetailScreenProps {}

const MealDetailScreen: React.FunctionComponent<MealDetailScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>The Meal Detail Screen!</Text>
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

export default MealDetailScreen;
