import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyASQ1YsahXDBsbfF6c7vjo7OKMQZy1Jys4",
    authDomain: "e-ride-15cbc.firebaseapp.com",
    projectId: "e-ride-15cbc",
    storageBucket: "e-ride-15cbc.appspot.com",
    messagingSenderId: "533406003034",
    appId: "1:533406003034:web:b8d1305c6c3bc493348d63"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


