import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { MEALS } from "../data/dummy.data";

export interface MealDetailScreenProps {
	navigation: NavigationStackProp;
}

const MealDetailScreen: React.FunctionComponent<MealDetailScreenProps> = ({
	navigation,
}) => {
	const mealId = navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View style={styles.container}>
			<Text>The Meal Detail Screen!</Text>
			<Button
				title="Go Back to Categories"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
};

(MealDetailScreen as any).navigationOptions = ({
	navigation,
}: {
	navigation: NavigationStackProp;
}) => {
	const mealId = navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal!.title,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default MealDetailScreen;
