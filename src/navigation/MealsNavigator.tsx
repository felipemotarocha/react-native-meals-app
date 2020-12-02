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
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultStackNavOptions = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform.OS === "android" ? COLORS.primaryColor : "none",
		},
		headerTintColor: Platform.OS === "android" ? "white" : COLORS.primaryColor,
	},
};

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: CategoryMealsScreen,
		MealDetail: MealDetailScreen,
	},
	defaultStackNavOptions
);

const FavoriteNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen,
	},
	defaultStackNavOptions
);

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo: {
				focused: boolean;
				tintColor?: string;
				horizontal?: boolean;
			}) => (
				<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
			),
		},
	},
	Favorites: {
		screen: FavoriteNavigator,
		navigationOptions: {
			tabBarLabel: "Favorites!",
			tabBarIcon: (tabInfo: {
				focused: boolean;
				tintColor?: string;
				horizontal?: boolean;
			}) => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />,
		},
	},
};

const MealsFavTabNavigator =
	Platform.OS === "android"
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: COLORS.accentColor,
				shifting: true,
				barStyle: {
					backgroundColor: COLORS.primaryColor,
				},
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: COLORS.accentColor,
				},
		  });

export default createAppContainer(MealsFavTabNavigator);
