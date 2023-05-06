import { StyleSheet } from "react-native";
import AppColors from "../theme/app_colors";

const buttonStyle = StyleSheet.create({
    headerButton: {
        backgroundColor: AppColors.oxfordBlueShade,
        borderRadius: 100,
        padding: 16,
        marginHorizontal: 30,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        
    },
});

export default buttonStyle;