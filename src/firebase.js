import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD3ui33GOO6GhuvuKiVehxWWGWUaR1rCXo",
  authDomain: "research-client.firebaseapp.com",
  projectId: "research-client",
  storageBucket: "research-client.appspot.com",
  messagingSenderId: "844553442309",
  appId: "1:844553442309:web:640c1e9102bf8f950ef86c",
  measurementId: "G-9C20T7915N"
};

firebase.initializeApp(firebaseConfig);

export default firebase;