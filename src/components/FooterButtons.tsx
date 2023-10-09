import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import styles from "./FooterButtonsStyles"
import NotificationBadge from "./NotificationBadge";

const FooterButtons = () => {
  // Function to handle button presses (to be implemented later)
  const handleButtonPress = (buttonName) => {
    // Implement logic for button presses here
    console.log(`${buttonName} button pressed`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Home")}
      >
        <Image style={styles.icons} source={require("../../assets/home.png")} />
     
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Friends")}
      >
        <Image
          style={styles.icons}
          source={require("../../assets/friends.png")}/>
       <NotificationBadge count={5} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("AddVideo")}
      >
        <Image style={styles.icons} source={require("../../assets/add.png")} />
   
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Inbox")}
      >
        <Image style={styles.icons} source={require("../../assets/inbox.png")} />
        <NotificationBadge count={3} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Profile")}
      >
       <Image style={styles.icons} source={require("../../assets/profile.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default FooterButtons;
