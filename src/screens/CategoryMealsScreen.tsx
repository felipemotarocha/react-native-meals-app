import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationStackProp } from "react-navigation-stack";

import MealItem from "../components/meal-item.component";
import { CATEGORIES, MEALS } from "../data/dummy.data";
import MealType from "../types/meal.type";

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

	const renderMealItem = ({ item }: { item: MealType }) => {
		return (
			<MealItem
				id={item.id}
				title={item.title}
				duration={item.duration}
				complexity={item.complexity}
				affordability={item.affordability}
				backgroundImageUrl={item.imageUrl}
				onSeleactMeal={() => {}}
			/>
		);
	};

	if (!selectedCategory) return null;

	return (
		<View style={styles.container}>
			<FlatList
				data={selectedCategorymeals}
				renderItem={renderMealItem}
				style={styles.mealsList}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	mealsList: {
		width: "100%",
	},
});

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
