import { StyleSheet } from "react-native";
import AppColors from "../theme/app_colors";

const textStyle = StyleSheet.create({
    defaultText: {
        color: "#fff",
        fontSize: 16,
    },
    inputHint: {
        position: "absolute",
        left: 30,
        color: AppColors.snow,
        fontSize: 16,
    },
    unitText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default textStyle;