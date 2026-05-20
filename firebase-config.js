// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// Adicionado: Importação das ferramentas do Firestore Database
import { getFirestore, doc, setDoc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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

// Inicializa os serviços específicos
const auth = getAuth(app);
const db = getFirestore(app); // Instância do banco de dados

// Exporta tudo que as telas de cadastro, login e painel vão precisar
export { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment
};
