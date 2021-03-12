import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAPC21_qSk4pS1-f2eqC30n1qvsUnw4B1Y",
    authDomain: "discord-clone-35080.firebaseapp.com",
    databaseURL: "https://discord-clone-35080.firebaseio.com",
    projectId: "discord-clone-35080",
    storageBucket: "discord-clone-35080.appspot.com",
    messagingSenderId: "1012583500474",
    appId: "1:1012583500474:web:0a190c738af1782555d083",
    measurementId: "G-0XGN55FNL6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;