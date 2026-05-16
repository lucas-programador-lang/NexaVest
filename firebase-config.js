// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Substitua pelas chaves reais geradas no seu console
const firebaseConfig = {
  apiKey: "AIzaSyBDOu9o_Ox7RnVFuHcR8EuJrOfbUrpyO5o",
  authDomain: "nexavest-4c3ae.firebaseapp.com",
  projectId: "nexavest-4c3ae",
  storageBucket: "nexavest-4c3ae.firebasestorage.app",
  messagingSenderId: "578374341571",
  appId: "1:578374341571:web:4bb7270c618ee5e9a1a376"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };
