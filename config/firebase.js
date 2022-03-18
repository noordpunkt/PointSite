// config/fire-config.js
//import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBa0qZ8ZB3qL-4T2E5dbPxGxYvZepVMKF8",
  authDomain: "uuni-34365.firebaseapp.com",
  projectId: "uuni-34365",
  storageBucket: "uuni-34365.appspot.com",
  messagingSenderId: "190812437460",
  appId: "1:190812437460:web:aef364ad8355c763a87441",
  measurementId: "G-TGWJNZJ09Z"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const db = firebase;
export default db;