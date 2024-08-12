// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkZPhEd4WxYvrgLscvjc6s8ZOSfknFAg0",
  authDomain: "inventory-management-app-91271.firebaseapp.com",
  projectId: "inventory-management-app-91271",
  storageBucket: "inventory-management-app-91271.appspot.com",
  messagingSenderId: "570145590980",
  appId: "1:570145590980:web:47bab4ca7829ed423e8391",
  measurementId: "G-9F8JTZ4XG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}