import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpErsKPWse0OBFHLPOoEeGY9xqWUnrh0M",
    authDomain: "bkash-bffa4.firebaseapp.com",
    projectId: "bkash-bffa4",
    storageBucket: "bkash-bffa4.appspot.com",
    messagingSenderId: "168147652196",
    appId: "1:168147652196:web:4c8bde59c40c25bbc09971",
    measurementId: "G-KZB7FD502H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;