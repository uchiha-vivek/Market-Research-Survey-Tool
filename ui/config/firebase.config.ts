 // Import the functions you need from the SDKs you need
 import { initializeApp,getApp,getApps } from "firebase/app";
 import {getAuth} from 'firebase/auth'
 import {getFirestore} from 'firebase/firestore'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA8kU-l48NS1sl8P_dGw9xPD9FoBGoiH6g",
   authDomain: "fir-9d913.firebaseapp.com",
   projectId: "fir-9d913",
   storageBucket: "fir-9d913.appspot.com",
   messagingSenderId: "402355579207",
   appId: "1:402355579207:web:070ee4b50becdf73634462"
 };
 
 // Initialize Firebase
 const app = !getApps.length ? initializeApp(firebaseConfig) :getApp()
 const auth = getAuth(app)
 const firestore = getFirestore(app)
 
 export {auth,firestore,app}