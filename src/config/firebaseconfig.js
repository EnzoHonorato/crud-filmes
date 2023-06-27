import firebase from "firebase"
import "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-KtvrjHMb5wW71A-k1kj-Adsp6yhVwSA",
  authDomain: "crud-6c094.firebaseapp.com",
  projectId: "crud-6c094",
  storageBucket: "crud-6c094.appspot.com",
  messagingSenderId: "207526540267",
  appId: "1:207526540267:web:7f2456acb0b96d84b19fae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
//const storage = storage(app)
export default database