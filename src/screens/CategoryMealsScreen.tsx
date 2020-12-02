import React from "react";
import { Platform } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import MealList from "../components/meal-list.component";

import { CATEGORIES, MEALS } from "../data/dummy.data";

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

	const selectedCategorymeals = MEALS.filter((meal) =>
		meal.categoryIds.includes(selectedCategoryId)
	);

	if (!selectedCategory) return null;

	return <MealList meals={selectedCategorymeals} />;
};

(CategoryMealsScreen as any).navigationOptions = (data: any) => {
	const selectedCategoryId = data.navigation.getParam("selectedCategoryId");
	const selectedCategory = CATEGORIES.find(
		({ id }) => id === selectedCategoryId
	);

	return {
		headerTitle: selectedCategory!.title,
		headerStyle: {
			backgroundColor:
				Platform.OS === "android" ? selectedCategory!.color : "none",
		},
		headerTintColor:
			Platform.OS === "android" ? "white" : selectedCategory!.color,
	};
};

export default CategoryMealsScreen;
