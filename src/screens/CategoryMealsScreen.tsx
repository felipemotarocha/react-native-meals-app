import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { CATEGORIES } from "../data/dummy.data";

export interface CategoryMealsScreenProps {
	navigation: NavigationStackProp;
}

const CategoryMealsScreen: React.FunctionComponent<CategoryMealsScreenProps> = ({
	navigation,
}) => {
	const selectedCategoryId = navigation.getParam("selectedCategoryId");
	const selectedCategory = CATEGORIES.find(
		({ id }) => id === selectedCategoryId
	);

	const handleNavigateToMealDetail = () => {
		navigation.navigate({ routeName: "MealDetail" });
	};

	if (!selectedCategory) return null;

	return (
		<View style={styles.container}>
			<Text>The Categories Meals Screen!</Text>
			<Text>{selectedCategory.title}</Text>
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

(CategoryMealsScreen as any).navigationOptions = (data: any) => {
	const selectedCategoryId = data.navigation.getParam("selectedCategoryId");
	const selectedCategory = CATEGORIES.find(
		({ id }) => id === selectedCategoryId
	);

	return {
		headerTitle: selectedCategory!.title,
	};
};

export default CategoryMealsScreen;
