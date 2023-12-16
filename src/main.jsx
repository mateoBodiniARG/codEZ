import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbWz34o_7CJhkKcczO6FEfpSUrgcbS09Y",
  authDomain: "codez-a0e45.firebaseapp.com",
  projectId: "codez-a0e45",
  storageBucket: "codez-a0e45.appspot.com",
  messagingSenderId: "1070183092505",
  appId: "1:1070183092505:web:3500cb2501aa49c91e7588",
  measurementId: "G-F8LBR9564Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
