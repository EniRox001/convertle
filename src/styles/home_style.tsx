import { StyleSheet } from "react-native";

export const home_style = StyleSheet.create({
    home_header: {
        backgroundColor: "#000022",
        height: 150,
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
        padding: 10,
        display: "flex",
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
        marginBottom: 20,
    },
    entryField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
    }

});

export default home_style;