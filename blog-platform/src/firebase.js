// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAssc7orGB2ru97JN-CTLRUBfWQoXA-JnU",
  authDomain: "react-blogs-app-c9dc4.firebaseapp.com",
  projectId: "react-blogs-app-c9dc4",
  storageBucket: "react-blogs-app-c9dc4.firebasestorage.app",
  messagingSenderId: "590691112505",
  appId: "1:590691112505:web:5a719125a74e94a155dfe8",
  measurementId: "G-7823WS0QGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth}
