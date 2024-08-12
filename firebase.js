// Import the functions you need from the SDKs you need
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
const firestore = getFirestore(app);

const FirebaseInit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      isSupported().then((supported) => {
        if (supported) {
          getAnalytics(app);
        }
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export { firestore, FirebaseInit };
