import { StyleSheet } from "react-native";
export default StyleSheet.create({
    overlay: {
      position: "absolute",
      bottom: 80, // Adjust the desired distance from the bottom
      right: 16, // Adjust the desired distance from the right
      backgroundColor: "rgba(0, 0, 0, 0)",
      flexDirection: "column",
      alignItems: "flex-end", // Align buttons to the right
      paddingHorizontal: 8, // Add horizontal padding for spacing
      paddingVertical: 8, // Add vertical padding for spacing
      borderRadius: 8, // Add a bit of border radius for rounded corners
    },
    button: {
      backgroundColor: "white",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      marginVertical: 4, // Adjust vertical margin for spacing
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    icon: {
      height: 20,
      width: 20,
    },
  });