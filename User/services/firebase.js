// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD463h6ckyOvBtYwbEpTtzJaeZKeaYvoCk",
    authDomain: "eco-system-f0db9.firebaseapp.com",
    projectId: "eco-system-f0db9",
    storageBucket: "eco-system-f0db9.appspot.com",
    messagingSenderId: "492918173538",
    appId: "1:492918173538:web:074328b408934a9342063b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage }; // Export storage for use in other components
