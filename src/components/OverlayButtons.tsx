import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import styles from "./OverlayButtonsStyles";

const OverlayButtons = () => {
  // Function to handle button presses (to be implemented later)
  const handleButtonPress = (buttonName) => {
    // Implement logic for button presses here
    console.log(`${buttonName} button pressed`);
  };

  return (
    <View style={styles.overlay}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Follow")}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/follow.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Like")}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/heart-filled.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Comment")}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/comment-filled.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Collection")}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/collection.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Share")}
      >
        <Image style={styles.icon} source={require("../../assets/share.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Music")}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/music-note.png")}
        />
      </TouchableOpacity>
    </View>
  );
};



export default OverlayButtons;
