import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { TouchableOpacity, TouchableNativeFeedback } from "react-native";

export interface CategoryGridTileProps {
	tileId: string;
	tileTitle: string;
	tileColor: string;
	onPress: () => void;
}

const CategoryGridTile: React.FunctionComponent<CategoryGridTileProps> = ({
	tileId,
	tileTitle,
	tileColor,
	onPress,
}) => {
	let TouchableComponent: any = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableComponent = TouchableNativeFeedback;
	}

	return (
		<View style={styles.container}>
			<TouchableComponent onPress={onPress} style={{ flex: 1 }}>
				<View
					key={tileId}
					style={{ ...styles.content, backgroundColor: tileColor }}
				>
					<Text style={styles.title} numberOfLines={2}>
						{tileTitle}
					</Text>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 7,
		overflow:
			Platform.OS === "android" && Platform.Version >= 21
				? "hidden"
				: "visible",
		elevation: 3,
	},
	content: {
		flex: 1,
		borderRadius: 7,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		padding: 10,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	title: {
		fontSize: 17,
		textAlign: "right",
	},
});

export default CategoryGridTile;
