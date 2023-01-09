import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDEzCKwgk6oZ0iXt0P-4o7_5Cad8-Hc--M",
  authDomain: "photo-social-mem-625a9.firebaseapp.com",
  projectId: "photo-social-mem-625a9",
  storageBucket: "photo-social-mem-625a9.appspot.com",
  messagingSenderId: "79686115050",
  appId: "1:79686115050:web:47f93f201b38feccc9c193"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider}