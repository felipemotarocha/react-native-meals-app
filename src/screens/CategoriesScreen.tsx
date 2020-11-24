import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy.data";
import CategoryType from "../types/category.type";

const renderGridItem = ({ item }: { item: CategoryType }) => {
	return (
		<View key={item.id} style={styles.gridItem}>
			<Text>{item.title}</Text>
		</View>
	);
};

const CategoriesScreen: React.FunctionComponent = () => {
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
