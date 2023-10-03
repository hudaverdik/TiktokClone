// Import necessary Firebase modules and types
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export interface AuthData {
  email: string;
  password: string;
}

// Initialize Firebase Auth

// Define a function to register a new user
export const registerUser = async (
  firebaseApp: FirebaseApp,
  email: string,
  password: string
): Promise<void> => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error; // Handle registration errors as needed
  }
};

// Define a function to log in a user
export const loginUser = async (
  firebaseApp: FirebaseApp,
  email: string,
  password: string
): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error; // Handle login errors as needed
  }
};

export const logoutUser = async (): Promise<void> => {
  const auth: Auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
  }
};
