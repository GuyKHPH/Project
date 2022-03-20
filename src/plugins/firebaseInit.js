import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDUvUcI_RkLZ3csTYeElUcvQt34cFOGvcw",
  authDomain: "finalexproject.firebaseapp.com",
  projectId: "finalexproject",
  storageBucket: "finalexproject.appspot.com",
  messagingSenderId: "773935802947",
  appId: "1:773935802947:web:4ae74dce8e9d5680d682f6",
  measurementId: "G-QV4R27578D"
});

const auth = getAuth(firebaseApp); 
const db = getFirestore(firebaseApp);

export { db, auth };
