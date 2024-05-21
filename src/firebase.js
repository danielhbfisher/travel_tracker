// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics'; 
// Commenting out Analytics as it may cause issues in a web app

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc_e3IlOSbYAsWcmkxJ6mj9X7t2oMtdcc",
  authDomain: "travel-tracking-app-4ea0f.firebaseapp.com",
  projectId: "travel-tracking-app-4ea0f",
  storageBucket: "travel-tracking-app-4ea0f.appspot.com",
  messagingSenderId: "190250274783",
  appId: "1:190250274783:web:1f20b3bab52b4e997bbe6a",
  measurementId: "G-69M413KKYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app); // Commenting out Analytics as it may cause issues in a web app

export { firestore, auth };
