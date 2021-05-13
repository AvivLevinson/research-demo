import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3ui33GOO6GhuvuKiVehxWWGWUaR1rCXo",
  authDomain: "research-client.firebaseapp.com",
  databaseURL: "https://research-client-default-rtdb.firebaseio.com",
  projectId: "research-client",
  storageBucket: "research-client.appspot.com",
  messagingSenderId: "844553442309",
  appId: "1:844553442309:web:640c1e9102bf8f950ef86c",
  measurementId: "G-9C20T7915N"
};

export const app = firebase.initializeApp(firebaseConfig);


