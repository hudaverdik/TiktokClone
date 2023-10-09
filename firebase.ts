// Import necessary Firebase modules and types
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./src/api/firebaseConfig";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


// Initialize Firestore
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const firestore: Firestore = getFirestore(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firebase Auth (already initialized in firebase-auth.ts)

// Export any other Firebase-related functionality here if needed
import { collection, addDoc, getDocs } from "firebase/firestore";
async function testFirestore() {
  try {
    // Add a document to a Firestore collection
    const docRef = await addDoc(collection(firestore, "testCollection"), {
      message: "Hello, Firestore!",
    });

    console.log("Document written with ID: ", docRef.id);

    // Retrieve data from Firestore
    const querySnapshot = await getDocs(collection(firestore, "testCollection"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Call the function to test Firestore
testFirestore();
