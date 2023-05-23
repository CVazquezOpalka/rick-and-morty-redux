import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBVjKsQxtspp-fr86o5lIfAOk2p4oL-RY",
  authDomain: "rick-and-morty-d7b3e.firebaseapp.com",
  projectId: "rick-and-morty-d7b3e",
  storageBucket: "rick-and-morty-d7b3e.appspot.com",
  messagingSenderId: "917524993473",
  appId: "1:917524993473:web:47b16b902c64cb96b94b40",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
