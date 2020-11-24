import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

export interface MealDetailScreenProps {
	navigation: NavigationStackProp;
}

const MealDetailScreen: React.FunctionComponent<MealDetailScreenProps> = ({
	navigation,
}) => {
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default MealDetailScreen;
