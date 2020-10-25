import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBY2GXhtiVBA-7RlCwOAOgMbvwEPaLrHrA",
        authDomain: "facebook-messenger-clone-8a228.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-8a228.firebaseio.com",
        projectId: "facebook-messenger-clone-8a228",
        storageBucket: "facebook-messenger-clone-8a228.appspot.com",
        messagingSenderId: "509398167874",
        appId: "1:509398167874:web:d042df575d1a13cee798db",
        measurementId: "G-KFF1BEWY5L"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();

export {
        // firebaseApp as firebase,
        db,
        auth,
        firestore
}
