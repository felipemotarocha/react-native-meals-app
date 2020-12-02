import React from "react";
import MealList from "../components/meal-list.component";
import { MEALS } from "../data/dummy.data";

export interface FavoritesScreenProps {}

const FavoritesScreen: React.FunctionComponent<FavoritesScreenProps> = () => {
	const favoriteMeals = MEALS.filter(
		(meal) => meal.id === "m1" || meal.id === "m2"
	);

	return <MealList meals={favoriteMeals} />;
};

export default FavoritesScreen;
