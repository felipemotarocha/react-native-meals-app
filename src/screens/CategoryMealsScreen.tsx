import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

export interface CategoryMealsScreenProps {
	navigation: NavigationStackProp;
}

const CategoryMealsScreen: React.FunctionComponent<CategoryMealsScreenProps> = ({
	navigation,
}) => {
	const handleNavigateToMealDetail = () => {
		navigation.navigate({ routeName: "MealDetail" });
	};

	return (
		<View style={styles.container}>
			<Text>The Categories Meals Screen!</Text>
			<Button title="Go to Meals!" onPress={handleNavigateToMealDetail} />
			<Button title="Go Back!" onPress={() => navigation.goBack()} />
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
