
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_2,
  authDomain: "imaginai-11979.firebaseapp.com",
  projectId: "imaginai-11979",
  storageBucket: "imaginai-11979.appspot.com",
  messagingSenderId: "382533519396",
  appId: "1:382533519396:web:d82f8ba3644ad2220c70b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth =getAuth(app)
const Provider= new GoogleAuthProvider()
const db=getFirestore(app) 
const storage=getStorage(app)
const API_TOKEN = process.env.REACT_APP_API_KEY
export{Auth,Provider,db,storage,API_TOKEN}