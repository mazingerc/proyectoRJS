import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD0yyJoj5MuPR_ZE7e1VAfqSm39om6_vpc",
  authDomain: "proyectorjs.firebaseapp.com",
  projectId: "proyectorjs",
  storageBucket: "proyectorjs.appspot.com",
  messagingSenderId: "507097213197",
  appId: "1:507097213197:web:b3b0d4efd1d9272f44e844",
  measurementId: "G-9HJ11DN1Y5"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export { auth, db };
