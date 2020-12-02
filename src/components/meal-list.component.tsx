import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import MealType from "../types/meal.type";

import MealItem from "../components/meal-item.component";

export interface MealListProps {
	meals: MealType[];
}

const MealList: React.FunctionComponent<MealListProps> = ({ meals }) => {
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

	return (
		<View style={styles.mealListContainer}>
			<FlatList
				style={styles.mealListContent}
				data={meals}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mealListContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	mealListContent: {
		width: "100%",
	},
});

export default MealList;
