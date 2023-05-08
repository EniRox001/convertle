import { StyleSheet } from 'react-native';
import AppColors from '../theme/app_colors';

const unit_picker_style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000022",
        // alignItems: "flex-start",
        // display: "flex",
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    buttonRow: {
        marginVertical: 10,
        backgroundColor: AppColors.oxfordBlueShade,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 30,
    }
})

export default unit_picker_style;