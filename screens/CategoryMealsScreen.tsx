import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface CategoryMealsScreenProps {}

const CategoryMealsScreen: React.FunctionComponent<CategoryMealsScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>The Categories Meals Screen!</Text>
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

export default CategoryMealsScreen;
