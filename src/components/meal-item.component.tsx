import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	TouchableWithoutFeedback,
} from "react-native";

import MealType from "../types/meal.type";

export interface MealItemProps {
	title: string;
	duration: number;
	complexity: string;
	affordability: string;
	backgroundImageUrl: string;
	onSeleactMeal: () => void;
}

const MealItem: React.FunctionComponent<MealItemProps> = ({
	title,
	duration,
	complexity,
	affordability,
	backgroundImageUrl,
}) => {
	return (
		<TouchableOpacity onPress={() => {}} style={styles.mealContainer}>
			<View style={styles.mealContent}>
				<ImageBackground
					source={{ uri: backgroundImageUrl }}
					style={styles.mealBackgroundImage}
				>
					<View style={styles.mealInfo}>
						<Text style={styles.mealTitle} numberOfLines={1}>
							{title}
						</Text>
						<View style={styles.mealDetail}>
							<Text style={styles.mealDetailText}>{duration}m</Text>
							<Text style={styles.mealDetailText}>{complexity}</Text>
							<Text style={styles.mealDetailText}>{affordability}</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
			{/* <View style={{ ...styles.mealRow, ...styles.mealDetail }}></View> */}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mealContainer: {
		height: 200,
		width: "100%",
		backgroundColor: "#000",
		borderRadius: 10,
		overflow: "hidden",
	},
	mealContent: {
		height: "100%",
	},
	mealBackgroundImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	mealInfo: {
		backgroundColor: "rgba(0,0,0,0.7)",
		paddingHorizontal: 12,
		paddingVertical: 7,
	},
	mealTitle: {
		fontFamily: "open-sans-bold",
		fontSize: 18,
		color: "white",
	},
	mealDetail: {
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		flexDirection: "row",
		color: "#eee",
	},
	mealDetailText: {
		color: "#eee",
	},
});

export default MealItem;
