import { FirebaseApp } from 'firebase/app';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';

// Define a type for user authentication data
export interface AuthData {
  email: string;
  password: string;
}

// Initialize Firebase Authentication
export const initFirebaseAuth = (firebaseApp: FirebaseApp): Auth => {
  return getAuth(firebaseApp);
};

// User Registration
export const registerUser = async (auth: Auth, userData: AuthData): Promise<void> => {
  try {
    await createUserWithEmailAndPassword(auth, userData.email, userData.password);
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// User Login
export const loginUser = async (auth: Auth, userData: AuthData): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, userData.email, userData.password);
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
