import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyChdIOHxa7I_-jJk7WyQlljojGdoJI-1-k",
  authDomain: "coderapp-96186.firebaseapp.com",
  projectId: "coderapp-96186",
  storageBucket: "coderapp-96186.appspot.com",
  messagingSenderId: "995266387983",
  appId: "1:995266387983:web:cede352a5b2cf99fadc37a",
  measurementId: "G-CR1B6RHLZT"
};


const app = initializeApp(firebaseConfig);
 export const DB = getFirestore(app)