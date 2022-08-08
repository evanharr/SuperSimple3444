
 import {initializeApp} from "firebase/app";
 import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut
 } from "firebase/auth";
 import {getDatabase, set, ref, update} from "firebase/database";


 const firebaseConfig = {
    apiKey: "AIzaSyAjpB2JZEWDNsZVX8QRWMuTiO-tQA31zxU",
    authDomain: "csce3444-5f9a0.firebaseapp.com",
    projectId: "csce3444-5f9a0",
    storageBucket: "csce3444-5f9a0.appspot.com",
    messagingSenderId: "261798731661",
    appId: "1:261798731661:web:310ea302cdb3700cbe27c4",
    measurementId: "G-XSBN3ZKG54",
    databaseURL: "https://csce3444-5f9a0-default-rtdb.firebaseio.com"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app