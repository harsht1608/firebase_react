import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDs00VPfP9YnoKBSnhRjXkRPKv1telp6kc",
    authDomain: "fir-react-ba3b9.firebaseapp.com",
    projectId: "fir-react-ba3b9",
    storageBucket: "fir-react-ba3b9.appspot.com",
    messagingSenderId: "300538564213",
    appId: "1:300538564213:web:8ab1ba88811e9ef3f6b23c",
    measurementId: "G-ZVS2VVV8EG"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);