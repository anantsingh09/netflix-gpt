// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByIProNyUu-PjQfyt4KkF4dcd7lZfAT5Q",
  authDomain: "netflixgpt-395b6.firebaseapp.com",
  projectId: "netflixgpt-395b6",
  storageBucket: "netflixgpt-395b6.appspot.com",
  messagingSenderId: "689379272196",
  appId: "1:689379272196:web:9c9117c36f84727eb43751",
  measurementId: "G-ESZ00DTRN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
