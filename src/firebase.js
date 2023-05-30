// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
    apiKey: "AIzaSyDG8N9L6-Z90xEb5j7RorAHlwkOZsXRM4w",
    authDomain: "authentication-6b81b.firebaseapp.com",
    projectId: "authentication-6b81b",
    storageBucket: "authentication-6b81b.appspot.com",
    messagingSenderId: "1084551406373",
    appId: "1:1084551406373:web:73f7fc1333a74f22ff30cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
