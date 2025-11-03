// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZrN6P_20RW7qmDaHsyLIAUW_nvaO59LM",
  authDomain: "react-native-expo-test-aac62.firebaseapp.com",
  projectId: "react-native-expo-test-aac62",
  storageBucket: "react-native-expo-test-aac62.firebasestorage.app",
  messagingSenderId: "970235404145",
  appId: "1:970235404145:web:117b9eafe12244387f20d0",
  measurementId: "G-PTTPZZ3K3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);