import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdF3PfiJKZ6_impPW2GdGAYJmmaW3i7Mg",
  authDomain: "gaming-news-5519e.firebaseapp.com",
  projectId: "gaming-news-5519e",
  storageBucket: "gaming-news-5519e.appspot.com",
  messagingSenderId: "399151339697",
  appId: "1:399151339697:web:fbd9f5845c8d5ec0bf6a90"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export{ auth }