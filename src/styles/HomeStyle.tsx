import { StyleSheet } from "react-native";

export const home_style = StyleSheet.create({
    home_header: {
        backgroundColor: "#000022",
    },
    home_header_title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    container: {
        flex: 1,
        backgroundColor: "#000022",
        alignItems: "center",
        display: "flex",
        padding: 5,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    input_container: {
        gap: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    entryField: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    }

});

export default home_style;