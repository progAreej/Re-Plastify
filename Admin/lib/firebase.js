// import { initializeApp } from 'firebase/app';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// const firebaseConfig = {
//   // Your Firebase configuration here
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// export async function uploadImage(file) {
//   const storageRef = ref(storage, 'challenges/' + file.name);
//   await uploadBytes(storageRef, file);
//   return getDownloadURL(storageRef);
// }







// // lib/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: "cinema-website-b44c3.appspot.com",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// export async function uploadImage(file) {
//   const storageRef = ref(storage, 'challenges/' + file.name);
//   await uploadBytes(storageRef, file);
//   return getDownloadURL(storageRef);
// }











// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyD463h6ckyOvBtYwbEpTtzJaeZKeaYvoCk",
//     authDomain: "eco-system-f0db9.firebaseapp.com",
//     projectId: "eco-system-f0db9",
//     storageBucket: "eco-system-f0db9.appspot.com",
//     messagingSenderId: "492918173538",
//     appId: "1:492918173538:web:074328b408934a9342063b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Storage
// const storage = getStorage(app);

// export { storage }; // Export storage for use in other components









// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD463h6ckyOvBtYwbEpTtzJaeZKeaYvoCk",
    authDomain: "eco-system-f0db9.firebaseapp.com",
    projectId: "eco-system-f0db9",
    storageBucket: "eco-system-f0db9.appspot.com",
    messagingSenderId: "492918173538",
    appId:"1:492918173538:web:074328b408934a9342063b"
};

// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

// Initialize Firebase Storage
const storage = getStorage(app);

// Function to upload image
async function uploadImage(file) {
    if (!file) return null;
    const storageRef = ref(storage, 'images/' + file.name);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
}

export { storage, app, uploadImage }; // Export storage, app, and uploadImage function