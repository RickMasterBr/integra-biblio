// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Importa as funções necessárias do Firebase

const firebaseConfig = {
  apiKey: "AIzaSyB7Gd6w1tkqa7CYIo13ZMCCONRsj7TTqdE",
  authDomain: "integra-biblio.firebaseapp.com",
  projectId: "integra-biblio",
  storageBucket: "integra-biblio.firebasestorage.app",
  messagingSenderId: "783099265363",
  appId: "1:783099265363:web:81ea8b73a6d4c8d16021a6",
  measurementId: "G-FGW1LBC3LK",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância de autenticação
const auth = getAuth(app);

// Exporta a instância do Firestore
const db = getFirestore(app);

// Exporta o app, auth e db para uso em outros arquivos
export { app, db };
export { auth };
