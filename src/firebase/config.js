import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB356PblV2S6fUh7Bh4tonspPVWqvNB8ic",
    authDomain: "leaderboard-c8a01.firebaseapp.com",
    projectId: "leaderboard-c8a01",
    storageBucket: "leaderboard-c8a01.appspot.com",
    messagingSenderId: "124116884741",
    appId: "1:124116884741:web:ef824c93036325fa126b6c"
  };

export default firebase.initializeApp(firebaseConfig);
