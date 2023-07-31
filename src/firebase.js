import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCsXMbq7NVBR_l9AAWhWePw-Dz671zwelI",
  authDomain: "twitter-clone-udemy-31ea3.firebaseapp.com",
  projectId: "twitter-clone-udemy-31ea3",
  storageBucket: "twitter-clone-udemy-31ea3.appspot.com",
  messagingSenderId: "1089073629749",
  appId: "1:1089073629749:web:747116d728b6095df53f7c"
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;