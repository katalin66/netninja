// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC_kuOU_8yUqJ16qsIkxT-8cexHyYoKrR8",
  authDomain: "schools-b2bdb.firebaseapp.com",
  projectId: "schools-b2bdb",
  storageBucket: "schools-b2bdb.appspot.com",
  messagingSenderId: "633626320365",
  appId: "1:633626320365:web:4855db1e617c465f04dbe4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

//Schools