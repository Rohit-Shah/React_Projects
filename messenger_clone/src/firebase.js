import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCLVx8705mol6ob1SjiYndqFoKN0fUhDAg",
    authDomain: "facebook-messenger-clone-a2e91.firebaseapp.com",
    projectId: "facebook-messenger-clone-a2e91",
    storageBucket: "facebook-messenger-clone-a2e91.appspot.com",
    messagingSenderId: "630662260979",
    appId: "1:630662260979:web:f45a5d9e4351861a3aef86",
    measurementId: "G-XWFCB175BS"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;