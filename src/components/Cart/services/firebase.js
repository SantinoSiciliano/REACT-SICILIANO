import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBErQHc_q61SRmj8LWIRH5FBPtnpRxLj0s",
  authDomain: "lucdrux.firebaseapp.com",
  projectId: "lucdrux",
  storageBucket: "lucdrux.appspot.com",
  messagingSenderId: "55791854466",
  appId: "1:55791854466:web:09542496cfc5b37bc4e59b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)