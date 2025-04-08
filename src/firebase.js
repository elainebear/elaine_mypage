import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCO1IyXdQxGreYhaaIwjPYYiLjBNF-Hdf4",
    authDomain: "personal-blog-c868e.firebaseapp.com",
    projectId: "personal-blog-c868e",
    storageBucket: "personal-blog-c868e.firebasestorage.app",
    messagingSenderId: "459639967074",
    appId: "1:459639967074:web:8f201c2cf75ea11d1d703b",
    measurementId: "G-3KW4WH448R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
