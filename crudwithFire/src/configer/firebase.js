// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCShkkRuR_wc-46wHM-9ij-MYNX5y95fmc",
  authDomain: "protocol-a9ac0.firebaseapp.com",
  projectId: "protocol-a9ac0",
  storageBucket: "protocol-a9ac0.firebasestorage.app",
  messagingSenderId: "103138957618",
  appId: "1:103138957618:web:494a99181f018e3a301f2b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}