import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1yk5JOs2ecm5fMVJHMYht9QKTyYBYinw",
  authDomain: "gymate-baf0e.firebaseapp.com",
  projectId: "gymate-baf0e",
  storageBucket: "gymate-baf0e.appspot.com",
  messagingSenderId: "883517811534",
  appId: "1:883517811534:web:879d8f749443cd58550c1f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export const db = getFirestore(app);
//export default getFirestore(app);
