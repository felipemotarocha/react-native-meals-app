import * as React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../constants/colors.constant";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
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

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => (
					<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
				),
			},
		},
		Favorites: {
			screen: FavoritesScreen,
			navigationOptions: {
				tabBarLabel: "Favorites!",
				tabBarIcon: (tabInfo) => (
					<Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
				),
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: COLORS.accentColor,
		},
	}
);

export default createAppContainer(MealsFavTabNavigator);
