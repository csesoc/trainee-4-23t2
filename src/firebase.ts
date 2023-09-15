import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCfYOzVv-LT6bhGKA3zMnFtTljmOMFMjy8",
  authDomain: "trainee-4-23t2.firebaseapp.com",
  projectId: "trainee-4-23t2",
  storageBucket: "trainee-4-23t2.appspot.com",
  messagingSenderId: "350061830654",
  appId: "1:350061830654:web:c210659fb0525b7ffe20af"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
