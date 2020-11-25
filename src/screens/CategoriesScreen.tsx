import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationStackProp } from "react-navigation-stack";

import { CATEGORIES } from "../data/dummy.data";
import CategoryType from "../types/category.type";
import CategoryGridTile from "./CategoryGridTile";

export interface CategoriesScreenProps {
	navigation: NavigationStackProp;
}

const CategoriesScreen: React.FunctionComponent<CategoriesScreenProps> = ({
	navigation,
}) => {
	const renderGridItem = ({ item }: { item: CategoryType }) => {
		const handleNavigateToCategoryMeals = () => {
			navigation.navigate({
				routeName: "CategoryMeals",
				params: {
					selectedCategoryId: item.id,
				},
			});
		};

		return (
			<CategoryGridTile
				tileId={item.id}
				tileTitle={item.title}
				tileColor={item.color}
				onPress={handleNavigateToCategoryMeals}
			/>
		);
	};

	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

(CategoriesScreen as any).navigationOptions = () => ({
	headerTitle: "Categories",
});

export default CategoriesScreen;
