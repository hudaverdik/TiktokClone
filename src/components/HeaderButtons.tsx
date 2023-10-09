import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./HeaderButtonsStyles";

const HeaderButtons = () => {
  // Function to handle button presses (to be implemented later)
  const handleButtonPress = (buttonName) => {
    // Implement logic for button presses here
    console.log(`${buttonName} button pressed`);
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.leftButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Live")}
        >
          <Image style={styles.icon} source={require("../../assets/live.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.centerButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Follow")}
        >
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("For You")}
        >
          <Text style={styles.buttonText}>For You</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rightButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Search")}
        >
          <Image style={styles.icon} source={require("../../assets/search.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderButtons;
