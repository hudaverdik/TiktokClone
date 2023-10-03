import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthData, loginUser } from '../helper/firebase-auth';
import { firebaseApp } from '../../firebase';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginButtonPress = async () => {
    try {
      await loginUser(firebaseApp, email, password);
      // Login successful; you can now navigate to the main screen
    } catch (error) {
      // Handle login error, e.g., display an error message
      console.error('Login error:', error.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLoginButtonPress} />
    </View>
  );
};

export default LoginScreen;
