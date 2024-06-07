import firebase from "firebase/compat/app";

import 'firebase/compat/auth';

import { getStorage } from "firebase/storage";

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3eX0gn6dYO9tDVbS7JAb_Ro2D7uO3mLA",
    authDomain: "sprint-rede-social.firebaseapp.com",
    projectId: "sprint-rede-social",
    storageBucket: "sprint-rede-social.appspot.com",
    messagingSenderId: "380703935363",
    appId: "1:380703935363:android:5e88f47c774d572c3e04b6"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const storage = getStorage(app);

export { db, auth, provider }