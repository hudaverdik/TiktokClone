import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { User } from 'firebase/auth';
import { firebaseApp,auth  } from './firebase';
import { AuthData, } from './src/api/firebase-auth';
import MainAppScreen from './src/screens/MainAppScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import { registerUser, loginUser, logoutUser } from './src/api/firebase-auth';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check user authentication status
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  // Define a function for user registration
  const handleRegistration = async (userData: AuthData) => {
    try {
      await registerUser(firebaseApp, userData.email, userData.password);
      // Registration successful; you can now navigate to the main screen
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
    }
  };

  // Define a function for user login
  const handleLogin = async (userData: AuthData) => {
    try {
      await loginUser(firebaseApp, userData.email, userData.password);
      // Login successful; you can now navigate to the main screen
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }
  };

  // Define a function for user logout
  const handleLogout = async () => {
    try {
      await logoutUser(); // Calls the logoutUser function from firebase-auth.ts
      setUser(null); // Set user to null in state
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {user ? (
          // User is authenticated, navigate to main app screen and pass the user object as a parameter
          <Stack.Screen name="MainApp">
            {(props) => (
              <MainAppScreen
                {...props}
                user={user}
                handleLogout={handleLogout} // Pass handleLogout to MainAppScreen
              />
            )}
          </Stack.Screen>
        ) : (
          // User is not authenticated, show login and registration screens
          <>
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} handleLogin={handleLogin} />}
            </Stack.Screen>
            <Stack.Screen name="Registration">
              {(props) => (
                <RegistrationScreen
                  {...props}
                  handleRegistration={handleRegistration}
                />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;