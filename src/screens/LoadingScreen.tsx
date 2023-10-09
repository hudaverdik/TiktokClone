import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const [showLogo, setShowLogo] = useState(true);

  // Simulate a loading delay with a minimum duration of 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      // Redirect to the next screen, e.g., your app's home screen
      navigation.replace('Login'); // Adjust the route name as needed
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {showLogo && <Image source={require('../../assets/logo.png')} style={styles.logo} />}
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Set your background color
  },
  logo: {
    width: 150, // Adjust the logo size as needed
    height: 200,
  },
});

export default LoadingScreen;
