import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import COLORS from "../constants/colors.constant";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: CategoryMealsScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor:
					Platform.OS === "android" ? COLORS.primaryColor : "none",
			},
			headerTintColor:
				Platform.OS === "android" ? "white" : COLORS.primaryColor,
		},
	}
);

export default createAppContainer(MealsNavigator);
