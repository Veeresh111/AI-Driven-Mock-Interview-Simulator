import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyApko7BQLZgP0v5UFZDWbwt_RqF2VOIvmU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ai-mock-interview-99dab.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ai-mock-interview-99dab",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ai-mock-interview-99dab.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "953301153171",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:953301153171:web:bfeb52730b0f11c82ee466",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-0KBHZSXP2Z",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
