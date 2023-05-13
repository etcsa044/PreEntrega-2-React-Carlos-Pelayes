
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAa6-lDZt7qQLmkbUhka3euXHNKVXq3zLs",
  authDomain: "rentaventura-efa79.firebaseapp.com",
  projectId: "rentaventura-efa79",
  storageBucket: "rentaventura-efa79.appspot.com",
  messagingSenderId: "844829945349",
  appId: "1:844829945349:web:a6bf2791189bc73e80b66c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFireBase = () => app;