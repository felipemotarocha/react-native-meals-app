import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors.constant";
import { Platform } from "react-native";

export interface CustomHeaderButtonProps {}

const CustomHeaderButton: React.FunctionComponent<CustomHeaderButtonProps> = (
	props
) => {
	return (
		<HeaderButton
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === "android" ? "white" : COLORS.primaryColor}
			title=""
			{...props}
		/>
	);
};

export default CustomHeaderButton;
