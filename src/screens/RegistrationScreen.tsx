import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { registerUser } from '../api/firebase-auth';
import { firebaseApp } from '../../firebase';
import { AuthData } from '../api/firebase-auth';

interface RegistrationScreenProps {
  handleRegistration: (userData: AuthData) => Promise<void>;
  navigation?: any;
}

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({ handleRegistration,navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistrationButtonPress = async () => {
    try {
      // Call the registerUser function from firebase-auth.ts
      await registerUser(firebaseApp, email, password);
      // Registration successful; you can now navigate to the main screen
      Alert.alert('Registration Successful', 'You can now log in.');

      // Call the handleRegistration prop after a successful registration
      handleRegistration({ email, password });
    } catch (error) {
      // Handle registration error, e.g., display an error message
      console.error('Registration error:', error.message);
      Alert.alert('Registration Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS==='ios'?"padding":"height"}>
      <Text style={styles.title}>Registration</Text>
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
      <Button title="Register" onPress={handleRegistrationButtonPress} />
      <Button title="Login" onPress={()=>{navigation.navigate('Login')}} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default RegistrationScreen;
