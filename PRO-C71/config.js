import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAomaEWoNVIs6e8b5S9mbROpugIesRVoWU",
  authDomain: "project-71-bicycles.firebaseapp.com",
  projectId: "project-71-bicycles",
  storageBucket: "project-71-bicycles.appspot.com",
  messagingSenderId: "926996549611",
  appId: "1:926996549611:web:6477ed142e8130ccd393ae"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
