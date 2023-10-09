import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#000", // Background color for the footer
      paddingHorizontal: 16, // Add horizontal padding
      paddingBottom: 24, // Add vertical padding
      borderTopWidth: 1, // Add a top border
      borderTopColor: "#ccc", // Color for the top border
    },
    icons: {
      width: 30,
      height: 30,
    },
    button: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 8,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  