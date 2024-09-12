// Import firebase modules
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';   // For authentication
import 'firebase/compat/firestore'; // For Firestore

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBA6q_SkQXGnJS11uxTsHBOi295nXUtiyc",
    authDomain: "deakin-app-15393.firebaseapp.com",
    projectId: "deakin-app-15393",
    storageBucket: "deakin-app-15393.appspot.com",
    messagingSenderId: "707367987477",
    appId: "1:707367987477:web:c1700c689e3f9d6782a11c"
  };

// Initialize Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Set up authentication and Firestore database
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Export the db and auth modules for use in other files
export { db, auth };
