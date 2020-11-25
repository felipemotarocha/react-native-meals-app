import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationStackProp } from "react-navigation-stack";

import { CATEGORIES } from "../data/dummy.data";
import CategoryType from "../types/category.type";

export interface CategoriesScreenProps {
	navigation: NavigationStackProp;
}

const CategoriesScreen: React.FunctionComponent<CategoriesScreenProps> = ({
	navigation,
}) => {
	const handleNavigateToCategoryMeals = (item: CategoryType) => {
		navigation.navigate({
			routeName: "CategoryMeals",
			params: {
				selectedCategoryId: item.id,
			},
		});
	};

	const renderGridItem = ({ item }: { item: CategoryType }) => {
		return (
			<TouchableOpacity
				containerStyle={styles.gridItem}
				onPress={() => handleNavigateToCategoryMeals(item)}
			>
				<View key={item.id}>
					<Text>{item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});

export default CategoriesScreen;
