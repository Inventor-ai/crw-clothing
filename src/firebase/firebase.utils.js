import firebase from 'firebase/app';
import config from './firebase.config';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// const config = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: ""
// };
// This info has been moved to firebase.config.js file.

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promppt: 'select_acount' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;