import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore/lite"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCGd4uR9-MOfd4Jx6uVzuULI4oVQYwR2n0",
  authDomain: "clone-66d13.firebaseapp.com",
  projectId: "clone-66d13",
  storageBucket: "clone-66d13.appspot.com",
  messagingSenderId: "454329336119",
  appId: "1:454329336119:web:6c4276139831606870dab2",
  measurementId: "G-R8B4706CV4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut}