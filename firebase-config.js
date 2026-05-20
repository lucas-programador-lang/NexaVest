// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Adicione initializeFirestore aqui:
import { initializeFirestore, doc, setDoc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDOu9o_Ox7RnVFuHcR8EuJrOfbUrpyO5o",
  authDomain: "nexavest-4c3ae.firebaseapp.com",
  projectId: "nexavest-4c3ae",
  storageBucket: "nexavest-4c3ae.firebasestorage.app",
  messagingSenderId: "578374341571",
  appId: "1:578374341571:web:4bb7270c618ee5e9a1a376"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Inicialização Otimizada
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});

export { 
  auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
  db, doc, setDoc, getDoc, updateDoc, increment 
};
