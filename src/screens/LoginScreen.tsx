import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AuthData, loginUser } from "../api/firebase-auth";
import { firebaseApp } from "../../firebase";

interface LoginScreenProps {
  handleLogin: (userData: AuthData) => Promise<void>;
  navigation?: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ handleLogin,navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginButtonPress = async () => {
    try {
      await loginUser(firebaseApp, email, password);
      // Login successful; you can now navigate to the main screen
      handleLogin({ email, password });
    } catch (error) {
      // Handle login error and display an alert
      Alert.alert("Login Error", error.message, [{ text: "OK" }]);
      console.error("Login error:", error.message);
    }
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior as needed
    >
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLoginButtonPress} />
      <Button title="Register" onPress={()=>{navigation.navigate('Registration')}} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
